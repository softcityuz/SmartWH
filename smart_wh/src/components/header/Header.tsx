import React from 'react'
import Down from '../../assets/icons/Down'
import Dropdown from './Dropdown'
import './Header.scss'
import Intersect from './Intersect'
import logo from './logo.svg'
interface IProps {
    onClickSignUp: () => void
    onClickSignIn: () => void
}

function Header(props: IProps) {
  return (
    <ul className='menu'>
        <li className='logo'>
            <a href='/'>
                <img src={logo} alt='logo' />
            </a>    
        </li>
        <li className='menu-item hoverable'>
            <a href="/">Asosiy</a>
        </li>
        <li className='menu-item hoverable'>
            <a href="/opportunities">Imkoniyatlar</a>
        </li>
        <li className='menu-item hoverable'>
            <a href="/comments">Sharhlar</a>
        </li>
        <li className='menu-item hoverable'>
            <a href="/news">Yangiliklar</a>
        </li>
        <li className='menu-item hoverable'>
            <a href="/contact">Aloqa</a>
        </li>
        <li className='menu-item'>
            <div onClick = {props.onClickSignUp} className='regester-btn'>
                <a>Ro‘yxatdan o‘tish</a>
            </div>
        </li>
        <li className='menu-item'>
            <a className='login-btn'>
                <Intersect />
                <span>Login</span>
            </a>
        </li>
        <li className='menu-item'>
            <span>UZ</span> <Down />
        </li>
    </ul>
  )
}

export default Header