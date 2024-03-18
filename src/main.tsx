import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloClientBuilder } from './core/client/apollo-client.builder.ts';
import { ApolloProvider } from '@apollo/client';

const client = ApolloClientBuilder.build();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
