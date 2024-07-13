import { Link, useLocation } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ flag, id, country }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
