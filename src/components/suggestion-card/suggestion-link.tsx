import { useSuggestionCardContext } from '../../context/suggestion-card.hook';

export const SuggestionLinkWrapper: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { link } = useSuggestionCardContext();
	return (
		<a href={link} target="_blank" className="cursor-pointer">
			{children}
		</a>
	);
};
