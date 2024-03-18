/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	timestamptz: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['Int']['input']>;
	_gt?: InputMaybe<Scalars['Int']['input']>;
	_gte?: InputMaybe<Scalars['Int']['input']>;
	_in?: InputMaybe<Array<Scalars['Int']['input']>>;
	_is_null?: InputMaybe<Scalars['Boolean']['input']>;
	_lt?: InputMaybe<Scalars['Int']['input']>;
	_lte?: InputMaybe<Scalars['Int']['input']>;
	_neq?: InputMaybe<Scalars['Int']['input']>;
	_nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['String']['input']>;
	_gt?: InputMaybe<Scalars['String']['input']>;
	_gte?: InputMaybe<Scalars['String']['input']>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars['String']['input']>;
	_in?: InputMaybe<Array<Scalars['String']['input']>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars['String']['input']>;
	_is_null?: InputMaybe<Scalars['Boolean']['input']>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars['String']['input']>;
	_lt?: InputMaybe<Scalars['String']['input']>;
	_lte?: InputMaybe<Scalars['String']['input']>;
	_neq?: InputMaybe<Scalars['String']['input']>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars['String']['input']>;
	_nin?: InputMaybe<Array<Scalars['String']['input']>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars['String']['input']>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars['String']['input']>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars['String']['input']>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars['String']['input']>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars['String']['input']>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars['String']['input']>;
};

/** Suggestions made by students */
export type Suggestions = {
	__typename?: 'Suggestions';
	author: Scalars['String']['output'];
	created_at: Scalars['timestamptz']['output'];
	id: Scalars['Int']['output'];
	image?: Maybe<Scalars['String']['output']>;
	link: Scalars['String']['output'];
	suggested_by: Scalars['String']['output'];
	title: Scalars['String']['output'];
	updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "Suggestions" */
export type Suggestions_Aggregate = {
	__typename?: 'Suggestions_aggregate';
	aggregate?: Maybe<Suggestions_Aggregate_Fields>;
	nodes: Array<Suggestions>;
};

/** aggregate fields of "Suggestions" */
export type Suggestions_Aggregate_Fields = {
	__typename?: 'Suggestions_aggregate_fields';
	avg?: Maybe<Suggestions_Avg_Fields>;
	count: Scalars['Int']['output'];
	max?: Maybe<Suggestions_Max_Fields>;
	min?: Maybe<Suggestions_Min_Fields>;
	stddev?: Maybe<Suggestions_Stddev_Fields>;
	stddev_pop?: Maybe<Suggestions_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Suggestions_Stddev_Samp_Fields>;
	sum?: Maybe<Suggestions_Sum_Fields>;
	var_pop?: Maybe<Suggestions_Var_Pop_Fields>;
	var_samp?: Maybe<Suggestions_Var_Samp_Fields>;
	variance?: Maybe<Suggestions_Variance_Fields>;
};

/** aggregate fields of "Suggestions" */
export type Suggestions_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Suggestions_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Suggestions_Avg_Fields = {
	__typename?: 'Suggestions_avg_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Suggestions". All fields are combined with a logical 'AND'. */
export type Suggestions_Bool_Exp = {
	_and?: InputMaybe<Array<Suggestions_Bool_Exp>>;
	_not?: InputMaybe<Suggestions_Bool_Exp>;
	_or?: InputMaybe<Array<Suggestions_Bool_Exp>>;
	author?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Int_Comparison_Exp>;
	image?: InputMaybe<String_Comparison_Exp>;
	link?: InputMaybe<String_Comparison_Exp>;
	suggested_by?: InputMaybe<String_Comparison_Exp>;
	title?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Suggestions" */
export enum Suggestions_Constraint {
	/** unique or primary key constraint on columns "id" */
	SuggestionsPkey = 'Suggestions_pkey',
}

/** input type for incrementing numeric columns in table "Suggestions" */
export type Suggestions_Inc_Input = {
	id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Suggestions" */
export type Suggestions_Insert_Input = {
	author?: InputMaybe<Scalars['String']['input']>;
	created_at?: InputMaybe<Scalars['timestamptz']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	link?: InputMaybe<Scalars['String']['input']>;
	suggested_by?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Suggestions_Max_Fields = {
	__typename?: 'Suggestions_max_fields';
	author?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['timestamptz']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	image?: Maybe<Scalars['String']['output']>;
	link?: Maybe<Scalars['String']['output']>;
	suggested_by?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Suggestions_Min_Fields = {
	__typename?: 'Suggestions_min_fields';
	author?: Maybe<Scalars['String']['output']>;
	created_at?: Maybe<Scalars['timestamptz']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	image?: Maybe<Scalars['String']['output']>;
	link?: Maybe<Scalars['String']['output']>;
	suggested_by?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "Suggestions" */
export type Suggestions_Mutation_Response = {
	__typename?: 'Suggestions_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int']['output'];
	/** data from the rows affected by the mutation */
	returning: Array<Suggestions>;
};

/** on_conflict condition type for table "Suggestions" */
export type Suggestions_On_Conflict = {
	constraint: Suggestions_Constraint;
	update_columns?: Array<Suggestions_Update_Column>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

/** Ordering options when selecting data from "Suggestions". */
export type Suggestions_Order_By = {
	author?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	image?: InputMaybe<Order_By>;
	link?: InputMaybe<Order_By>;
	suggested_by?: InputMaybe<Order_By>;
	title?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Suggestions */
export type Suggestions_Pk_Columns_Input = {
	id: Scalars['Int']['input'];
};

/** select columns of table "Suggestions" */
export enum Suggestions_Select_Column {
	/** column name */
	Author = 'author',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Link = 'link',
	/** column name */
	SuggestedBy = 'suggested_by',
	/** column name */
	Title = 'title',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "Suggestions" */
export type Suggestions_Set_Input = {
	author?: InputMaybe<Scalars['String']['input']>;
	created_at?: InputMaybe<Scalars['timestamptz']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	link?: InputMaybe<Scalars['String']['input']>;
	suggested_by?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Suggestions_Stddev_Fields = {
	__typename?: 'Suggestions_stddev_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Suggestions_Stddev_Pop_Fields = {
	__typename?: 'Suggestions_stddev_pop_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Suggestions_Stddev_Samp_Fields = {
	__typename?: 'Suggestions_stddev_samp_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Suggestions" */
export type Suggestions_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Suggestions_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suggestions_Stream_Cursor_Value_Input = {
	author?: InputMaybe<Scalars['String']['input']>;
	created_at?: InputMaybe<Scalars['timestamptz']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	link?: InputMaybe<Scalars['String']['input']>;
	suggested_by?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Suggestions_Sum_Fields = {
	__typename?: 'Suggestions_sum_fields';
	id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Suggestions" */
export enum Suggestions_Update_Column {
	/** column name */
	Author = 'author',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Link = 'link',
	/** column name */
	SuggestedBy = 'suggested_by',
	/** column name */
	Title = 'title',
	/** column name */
	UpdatedAt = 'updated_at',
}

export type Suggestions_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Suggestions_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Suggestions_Set_Input>;
	/** filter the rows which have to be updated */
	where: Suggestions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Suggestions_Var_Pop_Fields = {
	__typename?: 'Suggestions_var_pop_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Suggestions_Var_Samp_Fields = {
	__typename?: 'Suggestions_var_samp_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Suggestions_Variance_Fields = {
	__typename?: 'Suggestions_variance_fields';
	id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = 'ASC',
	/** descending ordering of the cursor */
	Desc = 'DESC',
}

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root';
	/** delete data from the table: "Suggestions" */
	delete_Suggestions?: Maybe<Suggestions_Mutation_Response>;
	/** delete single row from the table: "Suggestions" */
	delete_Suggestions_by_pk?: Maybe<Suggestions>;
	/** insert data into the table: "Suggestions" */
	insert_Suggestions?: Maybe<Suggestions_Mutation_Response>;
	/** insert a single row into the table: "Suggestions" */
	insert_Suggestions_one?: Maybe<Suggestions>;
	/** update data of the table: "Suggestions" */
	update_Suggestions?: Maybe<Suggestions_Mutation_Response>;
	/** update single row of the table: "Suggestions" */
	update_Suggestions_by_pk?: Maybe<Suggestions>;
	/** update multiples rows of table: "Suggestions" */
	update_Suggestions_many?: Maybe<Array<Maybe<Suggestions_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_SuggestionsArgs = {
	where: Suggestions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Suggestions_By_PkArgs = {
	id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_SuggestionsArgs = {
	objects: Array<Suggestions_Insert_Input>;
	on_conflict?: InputMaybe<Suggestions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Suggestions_OneArgs = {
	object: Suggestions_Insert_Input;
	on_conflict?: InputMaybe<Suggestions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_SuggestionsArgs = {
	_inc?: InputMaybe<Suggestions_Inc_Input>;
	_set?: InputMaybe<Suggestions_Set_Input>;
	where: Suggestions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Suggestions_By_PkArgs = {
	_inc?: InputMaybe<Suggestions_Inc_Input>;
	_set?: InputMaybe<Suggestions_Set_Input>;
	pk_columns: Suggestions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Suggestions_ManyArgs = {
	updates: Array<Suggestions_Updates>;
};

/** column ordering options */
export enum Order_By {
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

export type Query_Root = {
	__typename?: 'query_root';
	/** fetch data from the table: "Suggestions" */
	Suggestions: Array<Suggestions>;
	/** fetch aggregated fields from the table: "Suggestions" */
	Suggestions_aggregate: Suggestions_Aggregate;
	/** fetch data from the table: "Suggestions" using primary key columns */
	Suggestions_by_pk?: Maybe<Suggestions>;
};

export type Query_RootSuggestionsArgs = {
	distinct_on?: InputMaybe<Array<Suggestions_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	order_by?: InputMaybe<Array<Suggestions_Order_By>>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

export type Query_RootSuggestions_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Suggestions_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	order_by?: InputMaybe<Array<Suggestions_Order_By>>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

export type Query_RootSuggestions_By_PkArgs = {
	id: Scalars['Int']['input'];
};

export type Subscription_Root = {
	__typename?: 'subscription_root';
	/** fetch data from the table: "Suggestions" */
	Suggestions: Array<Suggestions>;
	/** fetch aggregated fields from the table: "Suggestions" */
	Suggestions_aggregate: Suggestions_Aggregate;
	/** fetch data from the table: "Suggestions" using primary key columns */
	Suggestions_by_pk?: Maybe<Suggestions>;
	/** fetch data from the table in a streaming manner: "Suggestions" */
	Suggestions_stream: Array<Suggestions>;
};

export type Subscription_RootSuggestionsArgs = {
	distinct_on?: InputMaybe<Array<Suggestions_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	order_by?: InputMaybe<Array<Suggestions_Order_By>>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

export type Subscription_RootSuggestions_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Suggestions_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	order_by?: InputMaybe<Array<Suggestions_Order_By>>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

export type Subscription_RootSuggestions_By_PkArgs = {
	id: Scalars['Int']['input'];
};

export type Subscription_RootSuggestions_StreamArgs = {
	batch_size: Scalars['Int']['input'];
	cursor: Array<InputMaybe<Suggestions_Stream_Cursor_Input>>;
	where?: InputMaybe<Suggestions_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['timestamptz']['input']>;
	_gt?: InputMaybe<Scalars['timestamptz']['input']>;
	_gte?: InputMaybe<Scalars['timestamptz']['input']>;
	_in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
	_is_null?: InputMaybe<Scalars['Boolean']['input']>;
	_lt?: InputMaybe<Scalars['timestamptz']['input']>;
	_lte?: InputMaybe<Scalars['timestamptz']['input']>;
	_neq?: InputMaybe<Scalars['timestamptz']['input']>;
	_nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type GetSuggestionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSuggestionsQuery = {
	__typename?: 'query_root';
	Suggestions: Array<{
		__typename?: 'Suggestions';
		id: number;
		created_at: any;
		author: string;
		image?: string | null;
		link: string;
		suggested_by: string;
		title: string;
		updated_at: any;
	}>;
};

export const GetSuggestionsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetSuggestions' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'Suggestions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'image' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'suggested_by' },
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetSuggestionsQuery, GetSuggestionsQueryVariables>;
