import * as React from 'react';
import { SuggestionCardContext } from '../../context/suggestion-card.context';
import { Suggestions } from '../../data/types/graphql';

interface SuggestionCardProps {
	suggestion: Suggestions;
}

export const SuggestionCard: React.FC<
	React.PropsWithChildren<SuggestionCardProps>
> = ({ suggestion, children }) => {
	return (
		<div>
			<SuggestionCardContext.Provider value={suggestion}>
				{children}
			</SuggestionCardContext.Provider>
		</div>
	);
};
