import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './InstaClone/Form';
import LandingPage from './InstaClone//Landingpage/LandingPage';
import Navber from './InstaClone/Navber';
import Postview from './InstaClone/Postview';
import Sidebar from './InstaClone/Sidebar';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/postview' element={ <Postview /> }>

          </Route>
          <Route path='/' element={ <LandingPage /> }>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
