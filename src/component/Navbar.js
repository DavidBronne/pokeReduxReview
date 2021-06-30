import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
/*     console.log('props :>> ', props);
    setTimeout(()=> {
        props.history.push('/about')
    }, 2000) */
    return (
        <nav className="nav-wraper red darken-3">
            <div className="container">
                <a className="brand-log">Poke</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)