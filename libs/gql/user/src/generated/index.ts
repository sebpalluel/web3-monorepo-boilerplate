import { useQuery, UseQueryOptions } from 'react-query';
import { fetchData } from '@governance/hasura-fetcher';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import * as Operations from './index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JwtToken = {
  __typename?: 'JwtToken';
  jwt: Scalars['String'];
};

export type SignoutOutput = {
  __typename?: 'SignoutOutput';
  ok: Scalars['Boolean'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  signout?: Maybe<SignoutOutput>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export const enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "passwords" */
export type Passwords = {
  __typename?: 'passwords';
  attempts: Scalars['Int'];
  hash: Scalars['String'];
  iterations: Scalars['Int'];
  salt: Scalars['String'];
};

/** order by aggregate values of table "passwords" */
export type Passwords_Aggregate_Order_By = {
  avg?: InputMaybe<Passwords_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Passwords_Max_Order_By>;
  min?: InputMaybe<Passwords_Min_Order_By>;
  stddev?: InputMaybe<Passwords_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Passwords_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Passwords_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Passwords_Sum_Order_By>;
  var_pop?: InputMaybe<Passwords_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Passwords_Var_Samp_Order_By>;
  variance?: InputMaybe<Passwords_Variance_Order_By>;
};

/** order by avg() on columns of table "passwords" */
export type Passwords_Avg_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "passwords". All fields are combined with a logical 'AND'. */
export type Passwords_Bool_Exp = {
  _and?: InputMaybe<Array<Passwords_Bool_Exp>>;
  _not?: InputMaybe<Passwords_Bool_Exp>;
  _or?: InputMaybe<Array<Passwords_Bool_Exp>>;
  attempts?: InputMaybe<Int_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  iterations?: InputMaybe<Int_Comparison_Exp>;
  salt?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "passwords" */
export type Passwords_Max_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "passwords" */
export type Passwords_Min_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "passwords". */
export type Passwords_Order_By = {
  attempts?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
};

/** select columns of table "passwords" */
export const enum Passwords_Select_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  Hash = 'hash',
  /** column name */
  Iterations = 'iterations',
  /** column name */
  Salt = 'salt',
}

/** order by stddev() on columns of table "passwords" */
export type Passwords_Stddev_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "passwords" */
export type Passwords_Stddev_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "passwords" */
export type Passwords_Stddev_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "passwords" */
export type Passwords_Sum_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "passwords" */
export type Passwords_Var_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "passwords" */
export type Passwords_Var_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "passwords" */
export type Passwords_Variance_Order_By = {
  attempts?: InputMaybe<Order_By>;
  iterations?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  passwords: Array<Passwords>;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  refreshJwtToken: JwtToken;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Query_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

export type Query_RootRefreshJwtTokenArgs = {
  fingerprintHash: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  passwords: Array<Passwords>;
  /** fetch data from the table: "passwords" using primary key columns */
  passwords_by_pk?: Maybe<Passwords>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Subscription_RootPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

export type Subscription_RootPasswords_By_PkArgs = {
  hash: Scalars['String'];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** An array relationship */
  passwords: Array<Passwords>;
};

/** columns and relationships of "users" */
export type UsersPasswordsArgs = {
  distinct_on?: InputMaybe<Array<Passwords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwords_Order_By>>;
  where?: InputMaybe<Passwords_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamp_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  passwords?: InputMaybe<Passwords_Bool_Exp>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  passwords_aggregate?: InputMaybe<Passwords_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MyUserFieldsFragment = {
  __typename?: 'users';
  email?: string | null;
  emailVerified?: any | null;
  id: string;
  image?: string | null;
  name?: string | null;
  password?: string | null;
};

export type PasswordFieldsFragment = {
  __typename?: 'passwords';
  attempts: number;
  hash: string;
  iterations: number;
  salt: string;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  }>;
};

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
  }>;
};

export type GetMyUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetMyUserByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
    password?: string | null;
  }>;
};

export type GetMyUserAndPasswordByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetMyUserAndPasswordByEmailQuery = {
  __typename?: 'query_root';
  users: Array<{
    __typename?: 'users';
    email?: string | null;
    emailVerified?: any | null;
    id: string;
    image?: string | null;
    name?: string | null;
    password?: string | null;
    passwords: Array<{
      __typename?: 'passwords';
      attempts: number;
      hash: string;
      iterations: number;
      salt: string;
    }>;
  }>;
};

export type UserFieldsFragment = {
  __typename?: 'users';
  email?: string | null;
  emailVerified?: any | null;
  id: string;
  image?: string | null;
  name?: string | null;
};

export const MyUserFieldsFragmentDoc = `
    fragment MyUserFields on users {
  email
  emailVerified
  id
  image
  name
  password
}
    `;
export const PasswordFieldsFragmentDoc = `
    fragment PasswordFields on passwords {
  attempts
  hash
  iterations
  salt
}
    `;
export const UserFieldsFragmentDoc = `
    fragment UserFields on users {
  email
  emailVerified
  id
  image
  name
}
    `;
export const GetUserDocument = `
    query getUser($id: String!) {
  users(where: {id: {_eq: $id}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['getUser', variables],
    fetchData<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables),
    options
  );

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => ['getUser', variables];
useGetUserQuery.fetcher = (
  variables: GetUserQueryVariables,
  options?: RequestInit['headers']
) => fetchData<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables, options);
export const GetUserByEmailDocument = `
    query getUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useGetUserByEmailQuery = <TData = GetUserByEmailQuery, TError = unknown>(
  variables: GetUserByEmailQueryVariables,
  options?: UseQueryOptions<GetUserByEmailQuery, TError, TData>
) =>
  useQuery<GetUserByEmailQuery, TError, TData>(
    ['getUserByEmail', variables],
    fetchData<GetUserByEmailQuery, GetUserByEmailQueryVariables>(
      GetUserByEmailDocument,
      variables
    ),
    options
  );

useGetUserByEmailQuery.getKey = (variables: GetUserByEmailQueryVariables) => [
  'getUserByEmail',
  variables,
];
useGetUserByEmailQuery.fetcher = (
  variables: GetUserByEmailQueryVariables,
  options?: RequestInit['headers']
) =>
  fetchData<GetUserByEmailQuery, GetUserByEmailQueryVariables>(
    GetUserByEmailDocument,
    variables,
    options
  );
export const GetMyUserByEmailDocument = `
    query getMyUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...MyUserFields
  }
}
    ${MyUserFieldsFragmentDoc}`;
export const useGetMyUserByEmailQuery = <TData = GetMyUserByEmailQuery, TError = unknown>(
  variables: GetMyUserByEmailQueryVariables,
  options?: UseQueryOptions<GetMyUserByEmailQuery, TError, TData>
) =>
  useQuery<GetMyUserByEmailQuery, TError, TData>(
    ['getMyUserByEmail', variables],
    fetchData<GetMyUserByEmailQuery, GetMyUserByEmailQueryVariables>(
      GetMyUserByEmailDocument,
      variables
    ),
    options
  );

useGetMyUserByEmailQuery.getKey = (variables: GetMyUserByEmailQueryVariables) => [
  'getMyUserByEmail',
  variables,
];
useGetMyUserByEmailQuery.fetcher = (
  variables: GetMyUserByEmailQueryVariables,
  options?: RequestInit['headers']
) =>
  fetchData<GetMyUserByEmailQuery, GetMyUserByEmailQueryVariables>(
    GetMyUserByEmailDocument,
    variables,
    options
  );
export const GetMyUserAndPasswordByEmailDocument = `
    query getMyUserAndPasswordByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...MyUserFields
    passwords {
      ...PasswordFields
    }
  }
}
    ${MyUserFieldsFragmentDoc}
${PasswordFieldsFragmentDoc}`;
export const useGetMyUserAndPasswordByEmailQuery = <
  TData = GetMyUserAndPasswordByEmailQuery,
  TError = unknown
>(
  variables: GetMyUserAndPasswordByEmailQueryVariables,
  options?: UseQueryOptions<GetMyUserAndPasswordByEmailQuery, TError, TData>
) =>
  useQuery<GetMyUserAndPasswordByEmailQuery, TError, TData>(
    ['getMyUserAndPasswordByEmail', variables],
    fetchData<
      GetMyUserAndPasswordByEmailQuery,
      GetMyUserAndPasswordByEmailQueryVariables
    >(GetMyUserAndPasswordByEmailDocument, variables),
    options
  );

useGetMyUserAndPasswordByEmailQuery.getKey = (
  variables: GetMyUserAndPasswordByEmailQueryVariables
) => ['getMyUserAndPasswordByEmail', variables];
useGetMyUserAndPasswordByEmailQuery.fetcher = (
  variables: GetMyUserAndPasswordByEmailQueryVariables,
  options?: RequestInit['headers']
) =>
  fetchData<GetMyUserAndPasswordByEmailQuery, GetMyUserAndPasswordByEmailQueryVariables>(
    GetMyUserAndPasswordByEmailDocument,
    variables,
    options
  );

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) =>
  action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getUser(
      variables: GetUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserQuery>(Operations.GetUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getUser',
        'query'
      );
    },
    getUserByEmail(
      variables: GetUserByEmailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetUserByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserByEmailQuery>(
            Operations.GetUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getUserByEmail',
        'query'
      );
    },
    getMyUserByEmail(
      variables: GetMyUserByEmailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetMyUserByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMyUserByEmailQuery>(
            Operations.GetMyUserByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getMyUserByEmail',
        'query'
      );
    },
    getMyUserAndPasswordByEmail(
      variables: GetMyUserAndPasswordByEmailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetMyUserAndPasswordByEmailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMyUserAndPasswordByEmailQuery>(
            Operations.GetMyUserAndPasswordByEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getMyUserAndPasswordByEmail',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
