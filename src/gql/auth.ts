import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
    mutation login(
        $service: ServiceTypes!, $accessToken: String, $accessTokenSecret: String,
        $password: String, $email: String,
    ) {
        login(input: {
            service: $service
            params: {
                accessToken: $accessToken,
                accessTokenSecret: $accessTokenSecret,
                password: $password,
                email: $email
            }
        }) {
            id
            user {
                id
                firstname
                lastname
                primaryEmail
                emails {
                    address
                    primary
                    verified
                }
                createdAt
                updatedAt
            }
        }
    }
`;

export const REGISTER_MUTATION = gql`
    mutation register(
        $firstname: String!,
        $lastname: String!,
        $email: String!,
        $password: String!,
    ) {
        register(input: {
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            password: $password
        }) {
            success
        }
    }
`;
