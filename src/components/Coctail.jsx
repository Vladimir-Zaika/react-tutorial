import { Box, Button, Grid, Heading, Image } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoctail } from '../api/coctailsAPI';

const Coctail = () => {
  const [coctail, setCoctail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCoctail(id).then(result => setCoctail(result?.drinks?.at(0)));
  }, [id]);

  return (
    <Box as="section">
      {coctail && (
        <Grid justifyItems="center" rowGap={5}>
          <Image src={coctail.strDrinkThumb} maxW="300" />
          <Heading>{coctail.strDrink}</Heading>
        </Grid>
      )}

      <Button
        mt={5}
        onClick={() => navigate('..', { relative: 'path', state: id })}
      >
        Back
      </Button>

      {/* <Button as={RouterLink} to=".." relative="path" mt={5}>
        Back
      </Button> */}

      {/* <Button mt={5} onClick={() => navigate(-1)}>
        Back
      </Button> */}
    </Box>
  );
};

export default Coctail;
