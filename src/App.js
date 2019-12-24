import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import { setSiteLogo , setFooterLogo , setCopyrights , setSocialMedia } from './redux/common/common.actions';

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
      setSocialMedia 
    } = this.props;

    //Get Common Params
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setFooterLogo(response.data.footerLogo);
      setCopyrights(response.data.copyright);
      setSocialMedia(response.data.socialMedia);
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
});

export default connect(null,mapDispatchToProps)(App);