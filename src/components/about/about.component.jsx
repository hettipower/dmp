import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAboutContent , selectAboutImage } from '../../redux/home/home.selectors';

import AboutArrow from '../../assets/images/about-arrow.png';

import './about.styles.scss';

const About = ({ aboutContent , aboutImage }) => (
    <div className="aboutWrap d-flex flex-wrap">
        <div className="aboutContent" dangerouslySetInnerHTML={{ __html : aboutContent  }} />
        <div className="aboutImageWrap">
            <img src={aboutImage} alt="About" className="aboutImage"/>
            <img src={AboutArrow} alt="About Arrow" className="aboutArrow"/>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    aboutContent : selectAboutContent,
    aboutImage : selectAboutImage
});

export default connect(mapStateToProps)(About);