import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    render() {
        return (
            <div>
                <div className="search-bar">
                    <div className="search-box">
                        <input className="search-area" placeholder="Search by Title"/>
                        <img
                            className="search-button"
                            alt='search'
                            src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/search_logo.png'
                        />
                        <button className="reset-button"> Reset </button>
                    </div>
                    <div className="check-box">
                        <p> My Posts </p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;