import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    render() {
        return (
            <div>
                Form
            </div>
        )
    }
}


export default Form;