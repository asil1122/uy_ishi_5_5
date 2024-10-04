import React from 'react'
import style from "./layout.module.scss"
import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer'

export const MainLayout = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.block}>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
