
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  JSON: any,
}

export interface AuthPayload {
  id: Scalars['ID'],
  sessionId?: Maybe<Scalars['String']>,
  tokens?: Maybe<Tokens>,
  user?: Maybe<User>,
}

export interface BooleanPayload {
  success: Scalars['Boolean'],
}


export interface EmailObject {
  address: Scalars['String'],
  primary?: Maybe<Scalars['Boolean']>,
  verified?: Maybe<Scalars['Boolean']>,
}


export interface LoginInput {
  service: ServiceTypes,
  params: LoginParamsInput,
}

export interface LoginParamsInput {
  /**  Access token for social (Service: Twitter, Github, Email)  */
  accessToken?: Maybe<Scalars['String']>,
  /**  Access token for social (Service: Twitter, Github, Email)  */
  accessTokenSecret?: Maybe<Scalars['String']>,
  /**  User password (Service: Password)  */
  password?: Maybe<Scalars['String']>,
  /**  Primary email of the user (Service: Password)  */
  email?: Maybe<Scalars['String']>,
}

export interface Mutation {
  login: AuthPayload,
  logout: BooleanPayload,
  register: BooleanPayload,
  refreshTokens?: Maybe<AuthPayload>,
  verifyEmail?: Maybe<BooleanPayload>,
  resetPassword?: Maybe<AuthPayload>,
  sendVerificationEmail?: Maybe<BooleanPayload>,
  sendResetPasswordEmail?: Maybe<BooleanPayload>,
  changePassword?: Maybe<BooleanPayload>,
}


export interface MutationLoginArgs {
  input: LoginInput
}


export interface MutationRegisterArgs {
  input: RegisterInput
}


export interface MutationRefreshTokensArgs {
  accessToken: Scalars['String'],
  refreshToken: Scalars['String']
}


export interface MutationVerifyEmailArgs {
  email: Scalars['String'],
  token: Scalars['Int']
}


export interface MutationResetPasswordArgs {
  token: Scalars['String'],
  newPassword: Scalars['String']
}


export interface MutationSendVerificationEmailArgs {
  email: Scalars['String']
}


export interface MutationSendResetPasswordEmailArgs {
  email: Scalars['String']
}


export interface MutationChangePasswordArgs {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String'],
  newPasswordComfirm: Scalars['String']
}

export interface Node {
  /** Type ID (Unique) */
  id: Scalars['ID'],
  /** Type creation timestamp (The timestamp the data was created) */
  createdAt: Scalars['DateTime'],
  /** Type update timestamp (The timestamp the data was created) */
  updatedAt: Scalars['DateTime'],
}

export interface Paginate {
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
}

export interface Query {
  me: User,
  user?: Maybe<User>,
}


export interface QueryUserArgs {
  id: Scalars['ID']
}

export interface RegisterInput {
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
}

export enum ServiceTypes {
  Password = 'Password',
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google'
}

export interface Tokens {
  refreshToken?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
}

export type User = Node & {
  /** Type ID (Unique) */
  id: Scalars['ID'],
  /** Type creation timestamp (The timestamp the data was created) */
  createdAt: Scalars['DateTime'],
  /** Type update timestamp (The timestamp the data was created) */
  updatedAt: Scalars['DateTime'],
  /** User firstname */
  firstname: Scalars['String'],
  /** User lastname */
  lastname: Scalars['String'],
  /** User email */
  primaryEmail: Scalars['String'],
  /** User emails */
  emails?: Maybe<EmailObject[]>,
  auth?: Maybe<AuthPayload>,
};




      export interface IntrospectionResultData {
        __schema: {
          types: Array<{
            kind: string;
            name: string;
            possibleTypes: Array<{
              name: string;
            }>;
          }>;
        };
      }

      const result: IntrospectionResultData = {
  '__schema': {
    'types': [
      {
        'kind': 'INTERFACE',
        'name': 'Node',
        'possibleTypes': [
          {
            'name': 'User'
          }
        ]
      }
    ]
  }
};

      export default result;
    