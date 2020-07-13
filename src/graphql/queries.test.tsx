import { createSignInQuery } from './queries';

describe('graphql querries', () => {
    it('createSignInQuery returns proper GraphQL DSL string', () => {
        const gql = createSignInQuery({
            auth_date: 1,
            id: 1,
            first_name: 'string',
            last_name: 'string',
            hash: 'string',
        });

        expect(gql).toEqual('mutation{signIn(auth_date:1,id:1,first_name:string,last_name:string,hash:string)}');
    });
});
