import React from 'react';

import './contact-details.styles.scss';

const ContactDetails = () => (
    <div className="contactDetailsWrap d-flex justify-content-between flex-wrap">
        <div className="titles col-md-4 col-12">
            <h6>Want to work together</h6>
            <h3>We would love to hear from you</h3>
        </div>
        <div className="contactDetail d-flex col-md-4 col-12">
            <div className="iconWrap"></div>
            <div className="detail">
                <small>Give us a call</small>
            </div>
        </div>
        <div className="contactDetail d-flex col-md-4 col-12">
            <div className="iconWrap">Email to us</div>
            <div className="detail"></div>
        </div>
    </div>
);

export default ContactDetails;