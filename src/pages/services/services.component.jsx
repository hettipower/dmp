import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectServiceContents } from '../../redux/services/services.selectors';

import MainBanner from '../../components/services/main-banner/main-banner.component';
import ServiceContent from '../../components/services/service-content/service-content.component';
import ThingsWeDo from '../../components/services/things-we-do/things-we-do.component';
import OurTeam from '../../components/our-team/our-team.component';
import TestimonialsService from '../../components/services/testimonials-service/testimonials-service.component';

import './services.styles.scss';

const ServicesPage = ({ serviceContents }) => (
    <div className="servicePageWrap">
        <MainBanner 
            bannerImage={(serviceContents) ? serviceContents.leftImage : ''} 
            bannerContent={(serviceContents) ? serviceContents.rightContent : ''} 
        />
        <ServiceContent
            serviceImage={(serviceContents) ? serviceContents.serviceImage : ''}
            serviceContent={(serviceContents) ? serviceContents.serviceContent : ''}
        />
        <ThingsWeDo
            things={(serviceContents) ? serviceContents.thingsBetterCont : ''}
        />
        <OurTeam />
        <TestimonialsService
            testimonialBg={(serviceContents) ? serviceContents.testimonialBg : ''}
        />
    </div>
);

const mapStateToProps = createStructuredSelector({
    serviceContents : selectServiceContents,
});

export default connect(mapStateToProps)(ServicesPage);