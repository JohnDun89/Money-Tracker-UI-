import React, { Component } from 'react';
import ChartComponent from './chart.jsx';
import Percentage from './percentage.jsx';

class MainContainer extends Component {
    state = {  }
    render() {
        return (
           <div id="main-container">
               < ChartComponent />
               < Percentage />
           </div> 
        );
    }
}

export default MainContainer;