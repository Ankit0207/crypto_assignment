import './App.css';
import { Route, Routes } from 'react-router-dom';
import Single_crypto from './Pages/Single_crypto';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Single_crypto />} />
      </Routes>
    </div>
  );
}

export default App;
