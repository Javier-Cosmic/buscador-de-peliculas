import React from 'react'
import {NavLink} from 'react-router-dom'

export const Titulo = ({ children }) => {

    return (
        <div className='titulo'>
            <NavLink to={`${process.env.PUBLIC_URL}/`} className='color-titulo'>{children}</NavLink>
        </div >
    )

}    