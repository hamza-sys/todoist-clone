import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ChakraProvider, Link } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import DrawerComp from './components/DrawerComp';
import { Link as RouterLink, RouterProvider } from 'react-router-dom';

import { router } from './index';
import theme from './theme';

function App() {
  return (
        <ChakraProvider theme={theme}>
          <RouterProvider router={router}>
          </RouterProvider>
        </ChakraProvider>
  );
}

export default App;
