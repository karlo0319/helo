import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture:''
        }
    }

    render() {
        return (
            <div>
                Post
            </div>
        )
    }
}


export default Post;