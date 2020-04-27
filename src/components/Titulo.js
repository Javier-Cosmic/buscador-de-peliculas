import React from 'react'
import {NavLink} from 'react-router-dom'

export const Titulo = ({ children }) => <NavLink to="/" className='titulo'>{children}</NavLink>