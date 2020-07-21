import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../ducks/reducer';
import './Dashboard';


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post('/api/auth/login', { username, password })
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => alert('Could not log in'));
    }


    handleRegister = () => {
        console.log(this.state)
        const { username, password } = this.state;
        if (password) {
            axios.post('/api/auth/register',{username, password})
                .then(res => {
                    this.props.updateUser(res.data)
                    this.props.history.push('/dashboard')
                })
                .catch(err => console.log(err))
        } else {
            alert('Password do not match');
        }
    }

    render() {
        const { username, password } = this.state
        return (
            <div className="auth-page">
                <img className="helo-logo" alt="logo" src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png' />
                <h1 className="helo"> Helo </h1>
                <div>
                    <span> Username: </span>
                    <input className="username-box"
                        type='text'
                        name='username'
                        value={username}
                        onChange={e => this.handleChange(e)} />
                </div>
                <div>
                    <span> Password: </span>
                    <input className="password-box"
                        type='text'
                        name='password'
                        value={password}
                        onChange={this.handleChange} />
                </div>
                <div className="auth-button-section">
                    <div >
                        <button className="auth-button" onClick={e => this.handleLogin(e)}> Login </button>
                        <button className="auth-button" onClick={e => this.handleRegister(e)}> Register </button>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = reduxState => reduxState;

export default connect(null, { updateUser })(Auth);