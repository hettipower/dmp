import React from 'react';

import './service-content.styles.scss';

const ServiceContent = ({ serviceImage , serviceContent }) => (
    <div className="serviceContentWrap d-flex flex-wrap">
        <div className="serviceImage">
            {
                (serviceImage) ?
                <img src={serviceImage} alt="service"/>
                : ''
            }
        </div>
        <div className="serviceContWrap" dangerouslySetInnerHTML={{ __html : serviceContent  }} />
    </div>
);

export default ServiceContent;