import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Registration />} />        
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
