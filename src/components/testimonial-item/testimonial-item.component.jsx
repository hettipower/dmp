import React from 'react';

import './testimonial-item.styles.scss';

const TestimonialItem = ({ author , company , image , quote }) => (
    <div className="testimonialItem">
        <div className="quote">{quote}</div>
        <div className="authorWrap d-flex">
            <div className="image" style={{ backgroundImage :`url(${image})` }} ></div>
            <div className="detail">
                <h4>{author}</h4>
                <span className="company">{company}</span>
            </div>
        </div>
    </div>
);

export default TestimonialItem;