import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ flag, id, country }) => (
        <GridItem key={id}>
          <Link>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
