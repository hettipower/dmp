import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectContactNo , selectEmail } from '../../redux/common/common.selectors';

import './contact-details.styles.scss';

const ContactDetails = ({ contactNo , email }) => (
    <div className="contactDetailsWrap d-flex justify-content-between flex-wrap">
        <div className="titles col-md-4 col-12">
            <h6>Want to work together</h6>
            <h3>We would love to hear from you</h3>
        </div>
        <div className="contactDetail d-flex col-md-4 col-12">
            <div className="iconWrap"><i className="fas fa-phone fa-flip-horizontal"></i></div>
            <div className="detail">
                <small>Give us a call</small>
                {contactNo}
            </div>
        </div>
        <div className="contactDetail d-flex col-md-4 col-12">
            <div className="iconWrap"><i className="fas fa-envelope"></i></div>
            <div className="detail">
                <small>Email to us</small>
                {email}
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    contactNo : selectContactNo,
    email : selectEmail
});

export default connect(mapStateToProps)(ContactDetails);