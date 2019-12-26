import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import OwlCarousel from 'react-owl-carousel2';

import { selectClients } from '../../redux/home/home.selectors';

import './our-team.styles.scss';
import 'react-owl-carousel2/src/owl.carousel.css';

const options = {
    nav: false,
    rewind: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsive: {
        0:{
            items:2,
        },
        600:{
            items:4
        },
        1000:{
            items:6,
        }
    }
};

const OurTeam = ({ clients }) => (
    <div className="ourTeamWrap">
        <OwlCarousel options={options} >
            {
                (clients)?
                clients.map( client => <div key={client.image} className="item"><img src={client.image} alt="Client"/></div> )
                : ''
            }
        </OwlCarousel>
    </div>
);

const mapStateToProps = createStructuredSelector({
    clients : selectClients,
});

export default connect(mapStateToProps)(OurTeam);