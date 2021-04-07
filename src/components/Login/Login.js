import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../../firebase/auth';
import ErrorMessage from '../global/ErrorMessage';
import {
    userLogin,
    userLoginStatus,
    userLoginErrorMessage
} from '../../reducers/login';
import { bindActionCreators } from 'redux';
import { clearLoginpProcessProps } from '../../actions/actionCreator';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    componentWillUnmount(){
        this.props.clearProps(this.state);
    }
    componentDidUpdate() {
        if(this.props.loginSuccess == true){
            this.props.history.push('/dashboard')
        }
    }
    handleInputChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state);
    }
    render(){
        const { loginSuccess, loginMessage } = this.props;
        
        return(
            <div className="login-form-content">
                <h2>Login</h2>
                <br />
                <ErrorMessage error={loginSuccess} message={loginMessage}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleInputChange} className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loginSuccess: userLoginStatus(state.Login),
    loginPending: userLogin(state.Login),
    loginMessage: userLoginErrorMessage(state.Login)
    
});
const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser: logInUser,
    clearProps: clearLoginpProcessProps
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)