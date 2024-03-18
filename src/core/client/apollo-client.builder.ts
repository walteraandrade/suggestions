import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET,
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export class ApolloClientBuilder {
	public static build() {
		return client;
	}
}
