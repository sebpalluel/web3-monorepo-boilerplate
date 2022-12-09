// https://docs.login.xyz/integrations/nextauth.js
import { getNextAuthURL } from '@client/next-auth/common';
import { IncomingMessage } from 'http';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';

export const SiweProvider = () =>
  CredentialsProvider({
    name: 'Ethereum',
    id: 'siwe',
    credentials: {
      message: {
        label: 'Message',
        type: 'text',
        placeholder: '0x0',
      },
      signature: {
        label: 'Signature',
        type: 'text',
        placeholder: '0x0',
      },
    },
    async authorize(credentials, req) {
      try {
        const siwe = new SiweMessage(JSON.parse(credentials?.message || '{}'));
        const nextAuthUrl = new URL(getNextAuthURL());
        const nonce = await getCsrfToken({ req: req as IncomingMessage });
        const result = await siwe.verify({
          signature: credentials?.signature || '',
          domain: nextAuthUrl.host,
          nonce,
        });
        if (result.success) {
          return {
            id: siwe.address,
            name: siwe.address,
            chainId: siwe.chainId,
          };
        }
        return null;
      } catch (e) {
        return null;
      }
    },
  });
