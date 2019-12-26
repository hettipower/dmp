import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import OwlCarousel from 'react-owl-carousel2';

import { selectTestimonials } from '../../redux/home/home.selectors';

import TestimonialItem from '../testimonial-item/testimonial-item.component';

import TestimonialIcon from '../../assets/images/testimonial-Icon.png';

import './testimonials.styles.scss';
import 'react-owl-carousel2/src/owl.carousel.css';

const options = {
    nav: false,
    rewind: true,
    autoplay: true,
    dots: false,
    items:1,
    loop : true,
};

const Testimonials = ({ testimonials }) => (
    <div className="testimonialsWrap d-flex flex-wrap" style={{ backgroundImage : `url(${TestimonialIcon})` }}>
        <div className="testiContWrap">
            <p>We are the best solution for you</p>
            <h2>Here is what our clients say about us</h2>
        </div>
        <div className="testimonials">
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
    </div>
);

const mapStateToProps = createStructuredSelector({
    testimonials : selectTestimonials,
});

export default connect(mapStateToProps)(Testimonials);