import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCopyrights , selectSocialMedia , selectFooterLogo } from '../../redux/common/common.selectors';

import './footer.styles.scss';

const Footer = ({ copyrights , socialMedia , footerLogo }) => (
    <div className="footerWrap d-flex flex-wrap">
        <div className="footerLogoWrap">
            {
                (footerLogo)?
                <img src={footerLogo} alt="Footer Logo"/>
                : ''
            }
            <p>Creating digital <br/> marketing wonders since 2015</p>
        </div>
        <div className="footrLinks">
            <nav className="nav flex-column">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/services">Services</Link>
                <Link className="nav-link" to="/work">Work</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </nav>
        </div>
        <div className="footerMoreLink">
            <h3>More Links</h3>
            <nav className="nav flex-column">
                <Link className="nav-link" to="/sitemap">Sitemap</Link>
                <Link className="nav-link" to="/faq">FAQ</Link>
                <Link className="nav-link" to="/things">Things we do</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
            </nav>
        </div>
        <div className="footerSocil">
            <h3>Stay Connected</h3>
            {
                (socialMedia)?
                <nav className="nav flex-column">
                    {
                        (socialMedia.facebook)? 
                        <Link className="nav-link" to={socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</Link>
                        : ''
                    }

                    {
                        (socialMedia.instagram)? 
                        <Link className="nav-link" to={socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</Link>
                        : ''
                    }

                    {
                        (socialMedia.linkedin)? 
                        <Link className="nav-link" to={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</Link>
                        : ''
                    }

                    {
                        (socialMedia.twitter)? 
                        <Link className="nav-link" to={socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</Link>
                        : ''
                    }
                </nav>
                : ''
            }            
        </div>
        <div className="comyrights">{copyrights}</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    copyrights : selectCopyrights,
    socialMedia : selectSocialMedia,
    footerLogo : selectFooterLogo
});

export default connect(mapStateToProps)(Footer);