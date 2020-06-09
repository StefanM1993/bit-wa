import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FaUndo } from 'react-icons/fa'
import { FaMicrosoft } from 'react-icons/fa'
import './Header.css'


const Header = () => {
    return (
        <header className='Header'>
            <h1 className='Header__title'>BIT People</h1>
            <div className='Header__icons'>
                <span className='Header__icons_rel'><FaUndo /></span>
                <span className='Header__icons_grid'><FaMicrosoft /></span>
                <span className='Header__icons_list'><FaBars /></span>
            </div>
        </header>
    )
}
export default Header