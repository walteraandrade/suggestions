import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const hasuraAdminSecret = process.env.VITE_HASURA_ADMIN_SECRET ?? '';
const config: CodegenConfig = {
	schema: [
		{
			'https://suggestions-v2.hasura.app/v1/graphql': {
				headers: {
					'x-hasura-admin-secret': hasuraAdminSecret,
				},
			},
		},
	],
	documents: 'src/data/graphql/**/',
	generates: {
		'src/data/types/': {
			preset: 'client',
			plugins: [],
		},
		'src/data/types/schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
