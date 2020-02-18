import React from 'react';
import { Link } from 'react-router-dom';

import './main-banner.styles.scss';

const MainBanner = ({ bannerImage , bannerContent }) => (
    <div className="mainContentWrap d-flex flex-wrap">
        <div className="leftImgWrap">
            {
                (bannerImage) ?
                <img src={bannerImage} alt="banner"/>
                : ''
            }
        </div>
        <div className="rightContWrap">
            <div dangerouslySetInnerHTML={{ __html : bannerContent  }} />
            <Link className="btn" to="/contact">GET ME A WEBSITE</Link>
        </div>
    </div>
);

export default MainBanner;