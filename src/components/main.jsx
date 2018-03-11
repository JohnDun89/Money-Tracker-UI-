import React, { Component } from 'react';
import TopBar from './topBar.jsx'
import MainContainer from './mainContainer.jsx'

class Main extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                < TopBar />
                < MainContainer />
            </div>
        );
    }
}

export  default Main;