import { useState } from 'react';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import Main from './components/Main';
import Bars from './components/Bars';
import MyProvider from './utils/MyProvider';


function App() {
  return (
    <>
    <MyProvider>
     <Nav />
    <Routes>
      <Route path='/' element = {<Landing />}/>
      <Route path='/signin' element = {<SignIn />}/>
      <Route path='/signup' element = {<SignUp />}/>
      <Route path='/main' element ={<Main />} />
      <Route path='/bars' element ={<Bars/>} />
    </Routes>
    </MyProvider>
    </>
  )
}

export default App;
