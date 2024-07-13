import {
  Container,
  CountryList,
  Heading,
  SearchForm,
  Section,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
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
  }, [region]);
  console.log(countries);

  const search = value => {
    setRegion(value);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSearch={search} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default SearchCountry;
