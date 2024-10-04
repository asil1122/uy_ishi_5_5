import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout'
import { Home } from './pages/home'
import { User } from './pages/user'
import { Profile } from './pages/profile'
import { UserDetail } from './pages/user-detail'

function App() {

  return (
      <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element ={<Home/>}/>
              <Route path='user' element={<User/>}/>
              <Route path='profile' element= {<Profile/>}/>
              <Route path='user/detail' element ={<UserDetail/>} />
          </Route>
      </Routes>
  ) 
}

export default App
