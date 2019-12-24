import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSiteLogo } from '../../redux/common/common.selectors';

import './header.styles';

const Header = ({ logo }) => (
    <div className="headerWrap">
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                {
                    (logo)?
                    <img src={logo} alt="Site Logo"/>
                    : ''
                }
            </Link>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/work">Work</Link>
                    </li>
                    <li className="nav-item contactLink">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

const mapStateToProps = createStructuredSelector({
    logo : selectSiteLogo
});

export default connect(mapStateToProps)(Header);