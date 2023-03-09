import { useState } from 'react';

import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box as="section" display={'grid'} rowGap={5}>
      <Heading>Conter: {count}</Heading>
      <ButtonGroup justifyContent={'center'}>
        <Button
          colorScheme={'green'}
          onClick={() => setCount(prevState => prevState + 1)}
        >
          Increment
        </Button>
        <Button
          colorScheme={'red'}
          onClick={() =>
            setCount(state => {
              return state + 1;
            })
          }
        >
          Decrement
        </Button>
        <Button colorScheme={'gray'} onClick={() => setCount(0)}>
          Reset
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Counter;
