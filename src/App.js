import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import { setSiteLogo , setFooterLogo , setCopyrights , setSocialMedia } from './redux/common/common.actions';
import { 
  setMainBanner , 
  setBannerText , 
  setAboutContent , 
  setAboutImage , 
  setThings , 
  setClients , 
  setTestimonials 
} from './redux/home/home.actions';

import API from './lib/api';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component';

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
      setTestimonials 
    } = this.props;

    //Get Common Params
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setFooterLogo(response.data.footerLogo);
      setCopyrights(response.data.copyrights);
      setSocialMedia(response.data.socialMedia);
    });

    //Get Home Page Content
    API.get('home')
    .then(function(response){
      setMainBanner(response.data.mainBanner);
      setBannerText(response.data.bannerText);
      setAboutContent(response.data.aboutContent);
      setAboutImage(response.data.aboutImage);
      setThings(response.data.things);
      setClients(response.data.testimonials);
      setTestimonials(response.data.clients);
    });

  }

  render(){
    return (
      <div className="appWrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
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
  setClients : (testimonials) => dispatch(setClients(testimonials)),
  setTestimonials : (clients) => dispatch(setTestimonials(clients)),
});

export default connect(null,mapDispatchToProps)(App);