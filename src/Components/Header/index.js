import React from 'react'
import logo from '../../assets/logo.png'
import { HeaderContainer, HeaderLinks } from './style'


export default function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" />
            <HeaderLinks>
                <p>Men</p>
                <p>Woman</p>
                <p>Kids</p>
                <input />
            </HeaderLinks>
        </HeaderContainer>
    )
}