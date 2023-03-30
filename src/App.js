import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CountryDetails from './pages/countryDetails/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrydetails" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
