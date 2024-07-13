import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const goBackPath = location?.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackPath}>Go Back</GoBackBtn>
        {error && <p>{error}</p>}
        {loading && <Loader />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};

export default Country;
