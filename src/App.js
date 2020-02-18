import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import { setSiteLogo , setFooterLogo , setCopyrights , setSocialMedia , setContactNo , setEmail } from './redux/common/common.actions';
import { 
  setMainBanner , 
  setBannerText , 
  setAboutContent , 
  setAboutImage , 
  setThings , 
  setClients , 
  setTestimonials 
} from './redux/home/home.actions';
import { setPortfolios } from './redux/portfolios/portfolios.actions';
import { setBlogPosts } from './redux/blog/blog.actions';
import { setServiceContents } from './redux/services/services.actions';

import API from './lib/api';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component';
import ServicesPage from './pages/services/services.component';
import AboutPage from './pages/about/about.component';
import WorkPage from './pages/work/work.component';
import ContactDetails from './components/contact-details/contact-details.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){

    const { 
      setSiteLogo , 
      setFooterLogo , 
      setCopyrights , 
      setSocialMedia ,
      setMainBanner , 
      setBannerText , 
      setAboutContent , 
      setAboutImage , 
      setThings , 
      setClients , 
      setTestimonials , 
      setPortfolios , 
      setBlogPosts , 
      setContactNo , 
      setEmail , 
      setServiceContents
    } = this.props;

    //Get Common Params
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setFooterLogo(response.data.footerLogo);
      setCopyrights(response.data.copyrights);
      setSocialMedia(response.data.socialMedia);
      setContactNo(response.data.contactNo);
      setEmail(response.data.email);
    });

    //Get Home Page Content
    API.get('home')
    .then(function(response){
      setMainBanner(response.data.mainBanner);
      setBannerText(response.data.bannerText);
      setAboutContent(response.data.aboutContent);
      setAboutImage(response.data.aboutImage);
      setThings(response.data.things);
      setClients(response.data.clients);
      setTestimonials(response.data.testimonials);
    });

    //Get Portfolios
    API.get('portfolios')
    .then(function(response){
      setPortfolios(response.data);
    });

    //Get Blog Posts
    API.get('blog')
    .then(function(response){
      setBlogPosts(response.data);
    });

    //Get Services Content
    API.get('services')
    .then(function(response){
      setServiceContents(response.data);
    });

  }

  render(){
    return (
      <div className="appWrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
        <ContactDetails/>
        <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSiteLogo : (logo) => dispatch(setSiteLogo(logo)),
  setFooterLogo : (footerLogo) => dispatch(setFooterLogo(footerLogo)),
  setCopyrights : (copyrights) => dispatch(setCopyrights(copyrights)),
  setSocialMedia : (socialMedia) => dispatch(setSocialMedia(socialMedia)),
  setMainBanner : (mainBanner) => dispatch(setMainBanner(mainBanner)),
  setBannerText : (bannerText) => dispatch(setBannerText(bannerText)),
  setAboutContent : (aboutContent) => dispatch(setAboutContent(aboutContent)),
  setAboutImage : (aboutImage) => dispatch(setAboutImage(aboutImage)),
  setThings : (things) => dispatch(setThings(things)),
  setClients : (clients) => dispatch(setClients(clients)),
  setTestimonials : (testimonials) => dispatch(setTestimonials(testimonials)),
  setPortfolios : (portfolios) => dispatch(setPortfolios(portfolios)),
  setBlogPosts : (blogPosts) => dispatch(setBlogPosts(blogPosts)),
  setContactNo : (contactNo) => dispatch(setContactNo(contactNo)),
  setEmail : (email) => dispatch(setEmail(email)),
  setServiceContents : (serviceContents) => dispatch(setServiceContents(serviceContents))
});

export default connect(null,mapDispatchToProps)(App);