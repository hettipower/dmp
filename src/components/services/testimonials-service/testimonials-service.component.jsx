import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import OwlCarousel from 'react-owl-carousel2';

import { selectTestimonials } from '../../../redux/home/home.selectors';

import TestimonialItem from '../../testimonial-item/testimonial-item.component';

import './testimonials-service.styles.scss';
import 'react-owl-carousel2/src/owl.carousel.css';

const options = {
    nav: false,
    rewind: true,
    autoplay: true,
    dots: false,
    items:1,
    loop : true,
};

const TestimonialsService = ({ testimonialBg , testimonials }) => (
    <div className="testimonialsWrapper">
        <span className="imgOverlay" style={{ backgroundImage : `url(${testimonialBg})` }} />
        <h4>We are really good at what we do</h4>
        <h2>This is what our client say about us</h2>
        <OwlCarousel options={options} >
            {
                (testimonials)?
                testimonials.map( testimonial => <TestimonialItem 
                    key={testimonial.author} 
                    author={testimonial.author} 
                    company={testimonial.company} 
                    image={testimonial.image} 
                    quote={testimonial.quote} 
                    /> )
                : ''
            }
        </OwlCarousel>
    </div>
);

const mapStateToProps = createStructuredSelector({
    testimonials : selectTestimonials,
});

export default connect(mapStateToProps)(TestimonialsService);