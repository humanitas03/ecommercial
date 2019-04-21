
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import './styles/main_styles.css';
import './styles/responsive.css';
import './styles/bootstrap4/bootstrap.min.css';


class AppHeader extends Component {
    render() {
        return (
            <div className="super_container">
            <header className="header trans_300">
        
                <div className="top_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="top_nav_right">
                                    <ul className="top_nav_menu">
                                        <li className="currency">
                                            
                                            <ul className="currency_selection">
                                                <li><a href="/">cad</a></li>
                                                <li><a href="/">aud</a></li>
                                                <li><a href="/">eur</a></li>
                                                <li><a href="/">gbp</a></li>
                                            </ul>
                                        </li>
                                        <li className="language">
                                            <a href="/">
                                                English
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            <ul className="language_selection">
                                                <li><a href="/">French</a></li>
                                                <li><a href="/">Italian</a></li>
                                                <li><a href="/">German</a></li>
                                                <li><a href="/">Spanish</a></li>
                                            </ul>
                                        </li>
                                        <li className="account">
                                            <a href="/"> 
                                                회원페이지
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            
                                            { this.props.authenticated ? (
                                            <ul className="account_selection">
                                                <li><NavLink to="/profile">Profile</NavLink> </li>
                                                <li> <a onClick={this.props.onLogout}>Logout</a></li>
                                                <li><NavLink to="/MyInfo">내정보</NavLink> </li>
                                                </ul>
                                                ):(
                                                    <ul className="account_selection">
                                                    <li>  <NavLink to="/login">로그인<i className="fa fa-sign-in" aria-hidden="true"></i></NavLink> </li>
                                                    <li><NavLink to="/signup">가입<i className="fa fa-user-plus" aria-hidden="true"></i></NavLink></li>
                                                    </ul>
                                                )}
                                                
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="main_nav_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-right">
                                <div className="logo_container">
                                    <a href="/">colo<span>shop</span></a>
                                </div>
                                <nav className="navbar">
                                    <ul className="navbar_menu">
                                        <li><a href="/"><h2>메인</h2></a></li>
                                        <li><a href="/"><h2>판매</h2></a></li>
                                        <li><a href="/"><h2>커뮤니티</h2></a></li>
                                        <li><a href="/"><h2>리뷰</h2></a></li>
                                        <li><a href="/"><h2>blog</h2></a></li>
                                        <li><NavLink to="/board"><h2>게시판</h2></NavLink></li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                    <ul className="navbar_user">
                                        <li><a href="/"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                                        <li className="checkout">
                                            <a href="/">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                <span id="checkout_items" className="checkout_items">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="hamburger_container">
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        
            </header>
        
        </div>
        )
    }
}

export default AppHeader;