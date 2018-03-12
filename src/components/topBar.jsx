import React, { Component } from 'react';
import Login from './login.jsx'

class TopBar extends Component {
    state = {  }
    render() {
        return (
            <div id="navigation">
                <h1 class="flex-item">Home</h1>
                <h1 class="flex-item" >Transactions</h1>
                <h1 class="flex-item">Settings</h1>
                <div class="flex-item">
                <  Login />
                </div>
            </div>

        );
    }
}

export default TopBar;