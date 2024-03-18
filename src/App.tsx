import { Suspense } from 'react';
import './App.css';
import { Audio } from 'react-loader-spinner';
import { useSuspenseQuery } from '@apollo/client';
import { GetSuggestionsDocument, GetSuggestionsQuery } from './data/types/graphql';
import { SuggestionCard } from './components/suggestion-card/suggestion-card';
import { SuggestionLinkWrapper } from './components/suggestion-card/suggestion-link';
import { SuggestionTitle } from './components/suggestion-card/suggestion-title';
import Button from './components/button/button';

function App() {
  const { data } = useSuspenseQuery<GetSuggestionsQuery>(GetSuggestionsDocument);

  return (
    <div className='bg-slate-700'>
      <div className='container  m-auto py-[80px] '>
        <h1 className='text-4xl text-white font-bold'>Sugestões</h1>
        <div className='flex flex-wrap justify-end'>
          <Button>Adicionar nova recomendação</Button>
        </div>
        <div className='flex gap-4 flex-wrap'>
          <Suspense fallback={<Audio />}>
            {data.Suggestions.map((suggestion) => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion}>
                <SuggestionLinkWrapper>
                  <div className='bg-white rounded-lg shadow-lg p-4 mt-4 flex flex-col items-center max-w-[600px]'>
                    <SuggestionTitle />
                    <p className='text-gray-500'>{suggestion.author}</p>
                    <div className='mt-12' />
                    <img
                      src={suggestion.image ?? ''}
                      alt={suggestion.title}
                      className='w-full max-h-[500px] max-w-[500px] mt-4'
                    />
                    <p className='text-gray-500'>Sugestão de: {suggestion.suggested_by}</p>
                  </div>
                </SuggestionLinkWrapper>
              </SuggestionCard>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
