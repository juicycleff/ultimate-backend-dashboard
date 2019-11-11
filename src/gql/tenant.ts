import gql from 'graphql-tag';

export const CREATE_TENANT_MUTATION = gql`
    mutation createTenant(
        $name: String!,
    ) {
        createTenant(input: {
            name: $name
        }) {
            id
            createdAt
            updatedAt
            name
            normalizeName
        }
    }
`;
