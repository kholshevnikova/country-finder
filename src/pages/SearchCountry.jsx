import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  // const [region, setRegion] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');

    if (!region) return;
    setLoading(true);
    const fetchCountries = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [searchParams]);

  const search = value => {
    setSearchParams({ query: value });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSearch={search} />
        {error && <p>{error}</p>}
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default SearchCountry;
