import * as React from 'react';
import unfetch from 'unfetch';
import {
    Center,
    Spinner,

    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    TableCaption,
    Link
} from '@chakra-ui/react';
import {
    Link as PageLink
} from 'react-router-dom';

import {apiURL} from '../config';

const MainPage = props => {
    const { useEffect, useState } = React;

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getList = async() => {
            const res = await fetch(apiURL + '/list');
            const data = await res.json();
            
            setList(data);
            setLoading(false);
        };

        getList();
    }, []);

    if(loading) {
        return (
            <Center paddingTop='20px'>
                <Spinner />
            </Center>
        );
    }

    return(
        <Table variant='simple' paddingTop='15px'>
          <Thead>
            <Tr>
              <Th>Title</Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                  list.map((item, key) => {
                    return (
                        <Tr key={key}>
                            <Td>
                                <Link as={PageLink} to={'/view/' + item.id}>
                                    {item.title}
                                </Link>
                            </Td>
                        </Tr>
                    );
                  })
              }
          </Tbody>
        </Table>
    );

    return null;
};

export default MainPage;