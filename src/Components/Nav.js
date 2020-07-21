import React, {Component} from 'react';
import { connect } from 'react-redux';


class Nav extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="app-nav">
                <div className="nav">
                    <div className="user-profile-pic">{this.props.user.profile}</div>
                    <div>
                        <p className="username-display">{this.props.user.username}</p>
                        <img
                            className='home-button'
                            alt='homebutton'
                            src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/home_logo.png' />
                        <img
                            className='post-button'
                            alt='postbutton'
                            src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/new_logo.png' />
                    </div>
                    <img
                        className='shutdown-button'
                        alt='shutdownbutton'
                        src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/shut_down.png' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);
