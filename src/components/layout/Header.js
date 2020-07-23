import React from 'react'

function Header(props) {
    const { branding } = props
    return (
        <div className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <a className="navbar-brand text-light" href="/">{branding}</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link mr-auto text-white" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;