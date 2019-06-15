import React, { Component } from 'react';
import {Provider} from 'react-redux';

import LoadingIndicator from './common/LoadingIndicator/LoadingIndicator';

import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';

import Alert from 'react-s-alert';

import AppHeader from './common/AppHeader/AppHeader';
import Footer from './common/Footer/Footer';

import store from './store/store';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    //Redux로 Store 관리대상
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //
  loadCurrentlyLoggedInUser() {
    this.setState({ 
      loading: true
    });

    // 현재 유저 정보 출력
    // Store 관리 대상
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  //Logout 처리 함수
  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
        <Provider store = {store}>
        <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        
        {/* <div className="app-body">
          <div className="row">
            <div className="container"> */}
             
              <Routes/>
            {/* </div>
          </div> 
        </div> */}

        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
        <Footer></Footer>
        </Provider>     
    );
  }
}

export default App;
