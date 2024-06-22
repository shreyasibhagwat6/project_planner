import './App.css';
import axios from 'axios';
import { ChakraProvider, Box, Button } from '@chakra-ui/react'

function App() {

  const handleClick = async () => {
    const response = await axios.get('http://localhost:3025')
    console.log('response', response)
  };

  return (
    <ChakraProvider>
      <Box>Hi!</Box>
      <Button onClick={handleClick}>Button</Button>
    </ChakraProvider>
  );
}

export default App;
