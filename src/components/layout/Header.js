import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    const { branding } = props
    return (
        <div className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <a className="navbar-brand text-light" href="/">{branding}</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link mr-auto text-white" to={"/"}> <i className="fa fa-home"></i> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-auto text-white" to={"/contact/add"}> <i className="fa fa-plus"></i> Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-auto text-white" to={"/about"}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
