import React from 'react';

import './best-work.styles.scss';

const BestWork = () => (
    <div className="bestWorkWrap">
        <h5 className="text-cenetr">We are really good at what we do</h5>
        <h2 className="text-center">Have a look at some of our best work</h2>
        <span className="showMeMore text-cenetr">show me more</span>
        <div className="portfolioWrap d-flex flex wrap">
            <div className="imgWrap"></div>
            <div className="contentWrap">
                <div className="type"></div>
                <h3 className="name"></h3>
                <div className="smallContent"></div>
                <div className="btnWrap">
                    <a className="btn website" href="#" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    <span className="btn contact">Im Impressed</span>
                </div>
            </div>
        </div>
    </div>
);

export default BestWork;