import React from 'react';
import './style/App.css';
import { Route, Routes } from 'react-router-dom'
import register  from './components/register';
import login from'./components/login';
import home  from './components/home';
import deals  from './components/deals';
import profile  from './components/profile'
import editdeals from './components/editdeals';
import { NavBar } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
<div className="App">
<NavBar />
<Routes>
<Route path='/' element={<register />} />
<Route path='/home' element={<home />} />
<Route path='/deals' element={<deals />} />
<Route path='/login' element={<login />} />
<Route path='/editdeal' element={<editdeal />} />
<Route path='/profile' element={<profile />} />
<Route path='/register' element={<register />} />
</Routes>
<Footer />
</div>
);
}

export default App;