import React, { Component } from 'react';
import {menuItems} from './MenuItems';
import './NavBar.css'
import {CartWidget} from './CartWidget'

class NavBar extends Component {
    render(){
        return(
            <nav className="navBarItems">
                <h1 className="navBarLogo">
                    byVEGAN
                </h1>
                <ul className="listItems">
                    {menuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.link}>
                                    {item.titulo}
                                </a>                           
                            </li>
                        )
                    })}                    
                </ul>
                <CartWidget />
            </nav>
        )
    }
}

export default NavBar;