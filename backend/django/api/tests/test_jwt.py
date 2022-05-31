import pytest
import json
import datetime
from freezegun import freeze_time
from rest_framework_simplejwt.state import token_backend
from django.conf import settings

from django.test import client
from api.models import User


@pytest.fixture()
def frozen_time():
    with freeze_time() as frozen_time:
        yield frozen_time


def assert_jwt(access_token, ok=True):
    res = client.Client().post(
        '/api/logic/hotdog/',
        json.dumps(
            dict(
                input=dict(
                    food='apple'
                )
            )
        ),
        'json',
        HTTP_AUTHORIZATION=f"Bearer {access_token}",
    )
    if ok:
        assert res.status_code == 200

        res_json = json.loads(res.content)
        assert 'hotdog' in res_json
    else:
        assert res.status_code == 401
        assert 'Token is invalid or expired' == res.data['messages'][0]['message']

    res = client.Client().post(
        '/api/token/verify/',
        dict(
            token=access_token,
        ),
        'application/json'
    )
    if ok:
        assert res.status_code == 200
    else:
        assert res.status_code == 401
        assert 'Token is invalid or expired' == res.data['detail']


@pytest.mark.django_db
class TestJWT:

    def test_token_story(cls, c, frozen_time):
        # note that we are not using client.admin here to avoid login in user and getting false positive

        # 1. Log in and request refresh and access token
        res = client.Client().post(
            '/api/token/',  # POST : accepts username and password. Returns access and refresh tokens.
            dict(
                username='admin',
                password='Montreuil#',
            ),
            'application/json',  # todo: 'application/json' breaks requests here
        )

        assert res.status_code == 200
        assert 'refresh' in res.data
        assert 'access' in res.data

        refresh_token = res.data['refresh']
        access_token = res.data['access']

        # 2. Validate token by hitting endpoint

        print("validate token by hitting endpoint")
        assert_jwt(access_token, ok=True)

        # 3. Refresh token 2 minutes later

        frozen_time.tick(delta=datetime.timedelta(minutes=2))
        res = client.Client().post(
            '/api/token/refresh/',  # POST : accepts refresh token. Provides new access token.
            dict(
                refresh=refresh_token,
            ),
            'application/json',  # todo: 'application/json' breaks requests here
            HTTP_AUTHORIZATION=f"Bearer {access_token}",
        )
        # token is refreshed because claims (payload) contains timestamps
        assert res.status_code == 200
        assert res.data['access'] != access_token

        old_access_token = access_token
        access_token = res.data['access']

        print("checking if old access token is still valid, 'exp' claim still being ok")
        assert_jwt(old_access_token, ok=True)
        assert_jwt(access_token, ok=True)

        # todo: use settings.SIMPLE_JWT
        frozen_time.tick(
            delta=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'] - datetime.timedelta(minutes=1)
        )
        print("a few minutes later, old_access_token is expired, new one still is valid")
        assert_jwt(old_access_token, ok=False)
        assert_jwt(access_token, ok=True)

        # in far future, both tokens are expired
        with freeze_time("2030-01-14"):
            assert_jwt(old_access_token, ok=False)
            assert_jwt(access_token, ok=False)

        # decoded_old = token_backend.decode(old_access_token)
        # decoded_new = token_backend.decode(access_token)
        # assert decoded_new['exp'] - decoded_old['exp'] >= 10