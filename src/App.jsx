import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'

import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <Login /> }/>
          <Route path='/login'element={ <Login/> }/>
          <Route element={ <PrivateRoute/> }>
            <Route path='/dashboard' element={ <Dashboard/> }/>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App