import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {menuItems} from './MenuItems';
import './NavBar.css'
import {CartWidget} from './CartWidget'

class NavBar extends Component {
    render(){
        return(
            <nav className="navBarItems">
                <h1 className="navBarLogo">
                   <Link to={'/'}> byVEGAN </Link>
                </h1>
                <ul className="listItems">
                    {menuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.link}>
                                    {item.titulo}
                                </Link>                           
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