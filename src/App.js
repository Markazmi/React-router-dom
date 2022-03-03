import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/Navbar'
import './App.css';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Home } from './components/Home';
import { About } from './components/About';
import { Profile } from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'
      element={
        <ProtectedRoutes>
          <Home/>
        </ProtectedRoutes>
      }/>
      <Route path='profile'
      element={
       
          <Profile/>
        
      }/>
       <Route path='about'
      element={
        <ProtectedRoutes>
          <About/>
        </ProtectedRoutes>
      }/>




    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
