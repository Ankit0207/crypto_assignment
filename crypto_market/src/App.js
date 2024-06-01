import './App.css';
import { Route, Routes } from 'react-router-dom';
import Single_crypto from './Pages/Single_crypto';
import Home from './Pages/Home';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Single_crypto />} />
      </Routes>
    </Box>
  );
}

export default App;
