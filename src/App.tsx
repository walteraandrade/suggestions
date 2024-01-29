import { Suspense } from 'react';
import './App.css';
import { Audio } from 'react-loader-spinner';

function App() {
	return (
		<div className="bg-slate-700">
			<div className="container h-[100vh] m-auto py-[120px] ">
				<h1 className="text-4xl text-white font-bold">Sugestões</h1>
				<Suspense fallback={<Audio />}>
					<SuggestionCard />
				</Suspense>
			</div>
		</div>
	);
}

export default App;

function SuggestionCard() {
	interface Data {
		Suggestions: any;
	}

	return (
		<>
			{/* {data?.Suggestions.map((suggestion: any) => (
				<div
					key={suggestion.id}
					className="bg-white rounded-lg shadow-lg p-4 mt-4 flex flex-col items-center"
				>
					<a href={suggestion.link} target="_blank" className="cursor-pointer">
						<h2 className="text-xl font-bold">{suggestion.title}</h2>
						<p className="text-gray-500">{suggestion.author}</p>
						<img
							src={suggestion.image}
							alt={suggestion.title}
							className="w-full max-h-[500px] max-w-[500px] mt-4"
						/>
						<div className="mt-12" />
						<p className="text-gray-500">
							Sugestão de: {suggestion.suggested_by}
						</p>
					</a>
				</div>
			))} */}
		</>
	);
}
