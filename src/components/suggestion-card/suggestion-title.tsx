import { useSuggestionCardContext } from '../../context/suggestion-card.hook';

export const SuggestionTitle: React.FC = () => {
	const { title } = useSuggestionCardContext();
	return <h1 className="text-2xl font-semibold">{title}</h1>;
};
