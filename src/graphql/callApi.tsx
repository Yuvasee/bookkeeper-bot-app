import { GraphQLClient } from 'graphql-request';
import config from '../config';

export function callApi(query: string, token?: string) {
    const client = new GraphQLClient(config.apiUrl, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    return client.request(query);
}
