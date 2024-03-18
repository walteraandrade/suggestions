import { useContext } from 'react';
import { SuggestionCardContext } from './suggestion-card.context';

export const useSuggestionCardContext = () => {
	const context = useContext(SuggestionCardContext);
	if (!context) {
		throw new Error(
			'useSuggestionCardContext must be used within a SuggestionCardContext'
		);
	}
	return useContext(SuggestionCardContext);
};
