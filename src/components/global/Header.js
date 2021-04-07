import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidUpdate() {
        
    }
    render(){
        const username = this.props.User.username;
        const userLoggedIn = this.props.User.isLoggedIn == true ? 'hide' : 'show';
        const userNotLoggedIn = this.props.User.isLoggedIn == true ? 'show' : 'hide';
        
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Forum</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={"nav-item " + userLoggedIn}>
                                <NavLink exact to="/" className="nav-link" activeClassName="activeNavigation">Login</NavLink>
                            </li>
                            <li className={"nav-item " + userLoggedIn}>
                                <NavLink exact to="/sign-up" activeClassName="activeNavigation" className="nav-link">Sign Up</NavLink>
                            </li>
                            <li className={"nav-item " + userNotLoggedIn}>
                                <NavLink exact to="/dashboard" activeClassName="activeNavigation" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className={"nav-item " + userNotLoggedIn}>
                                <NavLink exact to="/create-post" activeClassName="activeNavigation" className="nav-link">Create Post</NavLink>
                            </li>
                        </ul>
                    </div>
                    <p className="logged-in-user">User: {username}</p>
                    <p className="logged-in-user">Log Out</p>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return state;
}

export default connect(mapStateToProps, null)(Header);