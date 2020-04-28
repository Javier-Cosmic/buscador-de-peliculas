import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const Titulo = ({ children }) => {

    return (
        <div className='titulo'>
            <NavLink to="/" className='color-titulo'>{children}</NavLink>
            <img className='logo' src={logo} alt='logo cosmic-movie'width='45' />
        </div >
    )

}    