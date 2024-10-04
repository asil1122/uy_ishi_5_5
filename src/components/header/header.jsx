import React from 'react'
import style from "./header.module.scss"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={style.header}>
        <div className="container">
            <div className={style.block}>
                <Link className={style.link} to={"/"}>Home</Link>
                <Link className={style.link} to={"/profile"}>Profile</Link>
                <Link className={style.link} to={"/user"}>User</Link>
            </div>  
        </div>
    </div>
  )
}
