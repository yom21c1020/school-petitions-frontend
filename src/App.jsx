import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { 
    ChakraProvider,
    Flex, 
    Spacer,
    Heading,
    Container,
    Text,
    Link
} from '@chakra-ui/react';
import {
    Link as PageLink
} from 'react-router-dom';

import ForceDarkMode from './utils/ForceDarkMode';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';

const App = props => {
    return (
        <ChakraProvider>
            <Router>
                <ForceDarkMode />
                <Container maxW='1000px'>
                    <Flex align='center' margin='7px'>
                        <Heading size='md' padding='10px 10px' display='inline-block' as='span'>
                            <Link as={PageLink} to='/'>
                                SchoolPetitions
                            </Link>
                        </Heading>
                    </Flex>
                    <Switch>
                        <Route exact path='/' component = { MainPage } />
                        <Route exact path='/view/:id' component = { ViewPage } />
                    </Switch>
                    
                </Container>
            </Router>
        </ChakraProvider>
    );
};

export default App;

