import React from 'react'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <p>Men</p>
                <p>Woman</p>
                <p>kids</p>
                <input />
            </div>
        </div>
    )
}