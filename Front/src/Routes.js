
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './home/Home';
import Login from './components/user/login/Login';
import Signup from './components/user/signup/Signup';
import board  from './components/board/board'
import Profile from './components/user/profile/Profile';
import OAuth2RedirectHandler from './components/user/oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound/NotFound';


import PrivateRoute from './common/PrivateRoute';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import productlist from './components/product/productlist';
import adminproductinsert from './components/user/admin/adminproductinsert';
import productdetail from './components/product/productdetail';
import chatroom from './components/user/chat/chatroom';
import userlist from './components/user/chat/userlist';
import usertimeline from './components/user/chat/usertimeline';


const Routes = ()=>(
    // <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Home}></Route>           
                <PrivateRoute path="/profile" authenticated={false} currentUser={"user"}
                  component={Profile}></PrivateRoute>
                <Route path="/login"
                  render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
                <Route path="/signup"
                  render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
                <Route path="/board" component={board}></Route>
                <Route path="/productlist" component={productlist}></Route>
                <Route path="/productdetail" component={productdetail}></Route>
                <Route path="/adminproductinsert" component={adminproductinsert}></Route>
                <Route path="/chatroom" component={chatroom}></Route>
                <Route path="/userlist" component={userlist}></Route>
                <Route path="/usertimeline" component={usertimeline}></Route>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
                <Route component={NotFound}></Route>
              </Switch>
    // </BrowserRouter>
);

export default Routes;