import React from 'react';
import { ChakraProvider, theme, Heading } from '@chakra-ui/react';

import NotFound from './components/NotFound';

import Counter from './components/Counter';
import TaskList from './components/TaskList';
import CoctailsList from './components/CoctailsList';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Coctail from './components/Coctail';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Heading>Home</Heading>} />
            <Route path="counter" element={<Counter />} />
            <Route path="tasks" element={<TaskList />} />
            <Route path="coctails" element={<CoctailsList />} />
            <Route path="coctails/:id" element={<Coctail />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<Navigate to="." replace />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
