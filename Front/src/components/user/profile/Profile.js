import React, { Component } from 'react';
import './Profile.css';
import { NavLink } from 'react-router-dom';
class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                           <h2>{this.props.currentUser.roles["0"].name=='Admin'?<NavLink to="adminproductinsert">상품 등록페이지로</NavLink>:''}</h2>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile