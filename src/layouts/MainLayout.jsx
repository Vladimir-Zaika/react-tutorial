import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <Box display="grid" rowGap={10} textAlign="center" fontSize="xl">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
