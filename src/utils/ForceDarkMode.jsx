import { useColorMode } from '@chakra-ui/react';

const ForceDarkMode = props => {
    const { colorMode, toggleColorMode } = useColorMode();

    if(colorMode == 'light') {
        toggleColorMode();
    }

    return null;
}

export default ForceDarkMode;