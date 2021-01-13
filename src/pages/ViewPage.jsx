import * as React from 'react';
import {
    useParams
} from 'react-router-dom';
import {
    Heading,
    Text
} from '@chakra-ui/react';
import {apiURL} from '../config';
import unfetch from 'unfetch';

const ViewPage = props => {
    const { useEffect, useState } = React;
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [context, setContext] = useState('');

    useEffect(() => {
        const getPost = async() => {
            const res = await fetch(apiURL + '/post/' + id);
            const data = await res.json();
            
            if(data.result) {
                setTitle(data.result.title);
                setContext(data.result.context);
            } else {
                setTitle('머래양');
                setContext('~.~');
            }
        };

        getPost();
    }, [id]);

    return (
        <>
            <Heading size='md'>
                {title}
            </Heading>
            <Text>
                {context}
            </Text>
        </>
    );
    return null;
};

export default ViewPage;