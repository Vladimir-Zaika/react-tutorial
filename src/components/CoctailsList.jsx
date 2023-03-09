import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Spinner,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
} from '@chakra-ui/react';
import { getCoctails } from '../api/coctailsAPI';
import CoctailsItem from './CoctailsItem';

const filterCocteils = (coctails, input) => {
  return [...coctails].filter(coctail =>
    coctail.strDrink.toLowerCase().includes(input.toLowerCase())
  );
};

const CoctailsList = () => {
  const [coctails, setCoctails] = useState({
    items: [],
    error: null,
    isLoaded: false,
  });

  const [cocteilInput, setCocteilInput] = useState('');
  const [foundCoctails, setFoundCoctails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCoctails()
      .then(result => {
        setCoctails(prevState => ({
          ...prevState,
          items: result.drinks,
        }));
      })
      .catch(error => {
        setCoctails(prevState => ({
          ...prevState,
          error: error.message,
        }));
      })
      .finally(() => {
        setCoctails(prevState => ({
          ...prevState,
          isLoaded: true,
        }));
      });
  }, []);

  useEffect(() => {
    if (coctails.items && searchParams.get('search')) {
      setCocteilInput(searchParams.get('search'));
    } else {
      setFoundCoctails(coctails.items);
    }
  }, [coctails.items, searchParams]);

  useEffect(() => {
    if (coctails.items) {
      if (cocteilInput.trim()) {
        const filteredCoctails = filterCocteils(coctails.items, cocteilInput);
        setFoundCoctails(filteredCoctails);

        setSearchParams({ search: cocteilInput.toLowerCase() });
      } else {
        setFoundCoctails(coctails.items);
      }
    }
  }, [coctails.items, cocteilInput, setSearchParams]);

  const searchCoctail = event => {
    setCocteilInput(event.target.value);
    setSearchParams({});
  };

  return (
    <Box as="section" display="grid" rowGap={5}>
      <Heading>Coctails are here:</Heading>

      <Box as="form" onSubmit={event => event.preventDefault()}>
        <FormControl>
          <FormLabel>Search Coctail</FormLabel>
          <Input
            type="search"
            value={cocteilInput}
            name="filter"
            onChange={searchCoctail}
          />
        </FormControl>
      </Box>

      {!coctails.isLoaded && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      {coctails.error && (
        <Alert status="error">
          <AlertIcon />
          Error: {coctails.error}
        </Alert>
      )}

      {foundCoctails && !coctails.error && (
        <List spacing={3}>
          {foundCoctails.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <CoctailsItem
              key={idDrink}
              id={idDrink}
              name={strDrink}
              image={strDrinkThumb}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default CoctailsList;
