import Inicio from './pages/Inicio'
import Dashboard from './pages/Dashboard'
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Lugares from './pages/Lugares'
import Personas from './pages/Personas'
import Perfil from './pages/Perfil'

import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <Login /> }/>
          <Route path='/login'element={ <Login/> }/>
          <Route element={ <PrivateRoute/> }>
            <Route path='/dashboard' element={ <Dashboard/> }>
              <Route index element={ <Inicio/> }/>
              <Route path='lugares' element={ <Lugares/> }/>
              <Route path='personas' element={<Personas/>}/>
              <Route path='perfil' element={<Perfil/>}/>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
