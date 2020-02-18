import React from 'react';

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
        <div className="rightContWrap" dangerouslySetInnerHTML={{ __html : bannerContent  }} />
    </div>
);

export default MainBanner;