import { useState } from 'react';
import Container from '../../atoms/Container';
import Copy from '../../atoms/Copy';
import Header from '../../atoms/Header';
import { useSearchContext } from '../../hooks/useSearchContext';
import ErrorComponent from '../../organisms/ErrorComponent';
import Layout from '../../organisms/Layout';
import LoadingComponent from '../../organisms/LoadingComponent';
import ResultsGrid from '../../organisms/ResultsGrid';
import { uiStateColors } from '../../variables/colors';
import { StyledSearchTemplate } from './styles';
import { ISearchTemplate } from './types';

export const SearchTemplate = ({ dataTestId }: ISearchTemplate) => {
  const { movieData, searchTerm, error, loading, noResults } = useSearchContext();

  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;
  return (
    <StyledSearchTemplate data-testid={dataTestId}>
      <Layout pageHeader={`Search results for ${searchTerm}`}>
        <ResultsGrid items={movieData} />
      </Layout>
      {noResults && (
        <Container center width="100%" height="100%">
          <Copy fontSize={20} color={uiStateColors.warning} lineHeight={32}>
            Sorry, your search for ${searchTerm} yielded no results. Try another film?
          </Copy>
        </Container>
      )}
    </StyledSearchTemplate>
  );
};
