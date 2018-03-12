import React, { Component } from 'react';
import TopBar from './topBar.jsx'
import MainContainer from './mainContainer.jsx'

class Main extends Component {
    state = {  }
    render() {
        return (
            <div id="main">
                < TopBar />
                < MainContainer />
            </div>
        );
    }
}

export  default Main;