import React from 'react';

import MainBanner from '../../components/main-banner/main-banner.component';
import About from '../../components/about/about.component';
import Things from '../../components/things/things.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import OurTeam from '../../components/our-team/our-team.component';
import BestWork from '../../components/best-work/best-work.component';
import WhyMarketing from '../../components/why-marketing/why-marketing.component';
import BlogContainer from '../../components/blog-container/blog-container.component';
import ContactDetails from '../../components/contact-details/contact-details.component';

import './home.styles.scss';

const HomePage = () => (
    <div className="homePageWrap">
        <MainBanner/>
        <About/>
        <Things/>
        <Testimonials/>
        <OurTeam/>
        <BestWork/>
        <WhyMarketing/>
        <BlogContainer/>
        <ContactDetails/>
    </div>
);

export default HomePage;