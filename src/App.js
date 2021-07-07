import { Box } from '@chakra-ui/react';
import React from 'react';
import { Feed } from './Feed';

export default function App() {
    return (
        <Box width="100vw" minHeight="100vh" bg={'gray.100'}>
            <Feed/>
       </Box>
    )
}