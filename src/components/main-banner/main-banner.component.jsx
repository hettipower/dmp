import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMainBanner , selectBannerText } from '../../redux/home/home.selectors';

import './main-banner.styles.scss';

const MainBanner = ({ mainBanner , bannerText }) => (
    <div className="mainBannerWrap d-flex flex-wrap">
        <div className="bannerText d-flex align-items-center col-md-6 col-12">
            <h1>{bannerText}</h1>
        </div>
        <div className="mainBanner col-md-6 col-12" style={{ backgroundImage : `url(${mainBanner})` }} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    mainBanner : selectMainBanner,
    bannerText : selectBannerText
});

export default connect(mapStateToProps)(MainBanner);