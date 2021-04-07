import React from 'react';
import { connect } from "react-redux";
import ErrorMessage from '../global/ErrorMessage';
import { bindActionCreators } from 'redux';
import { userCreate, userCreateError, userErrorMessage} from '../../reducers/signUp';
import { createNewUser } from '../../firebase/auth';
import { clearSignUpProps } from '../../actions/actionCreator';
class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            passwordMatch: ''
        };
    }
    componentWillUnmount(){
        this.props.clearProps(this.state);
    }
    componentDidUpdate() {
        if(this.props.createUserSuccess == true){
            let timer = setTimeout(() =>{
                this.props.history.push('/')
                clearTimeout(timer);
            }, 3000);
        }
    }
    handleInputChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        }, () => {
            this.passwordMatch(this.state);
        });
    }
    passwordMatch = (state) => {
        if(state.password  == '' && state.confirm_password == ''){return false}
        let match = false;
        if(state.password == state.confirm_password){
            match = true;
        }
        this.setState({
            passwordMatch: match
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.passwordMatch){
           this.props.createUser(this.state);
        }
    }
    PasswordMatchWarning = (match) => {
        if(match !== '' && match === false){
            return(
                <p className="matchWarning">Passwords do not match.</p>
            )
        }
    }
    render(){
        const {createUserSuccess, createUserpending ,createUserMessage} = this.props;
        const errorBorder = this.state.passwordMatch === false ? ' errorBorder' : '';
        const { passwordMatch } = this.state;
        console.log(this.props);
        return(
            <div className="login-form-content">
                <h2>Sign Up</h2>
                <br />
                <ErrorMessage error={createUserSuccess} message={createUserMessage}/>
                <form id="sign-up-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" name="username"
                            minLength="6" onChange={this.handleInputChange}
                            className={'form-control'} required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" name="email"
                            onChange={this.handleInputChange}
                            className="form-control" required
                        />
                    </div>
                    {this.PasswordMatchWarning(passwordMatch)}
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" name="password"
                            minLength="6" onChange={this.handleInputChange}
                            className={'form-control' + errorBorder} required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                            type="password" name="confirm_password"
                            minLength="6" onChange={this.handleInputChange}
                            className={'form-control' + errorBorder} required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    createUserSuccess: userCreateError(state.SignUp),
    createUserpending: userCreate(state.SignUp),
    createUserMessage: userErrorMessage(state.SignUp),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    createUser: createNewUser,
    clearProps: clearSignUpProps
}, dispatch)

export default connect(mapStateToProps,  mapDispatchToProps)( SignUp );