import { createContext, useContext } from 'react';
import { Suggestions } from '../data/types/graphql';

export const SuggestionCardContext = createContext<Suggestions>(
	{} as Suggestions
);

