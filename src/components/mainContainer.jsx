import React, { Component } from 'react';
import ChartComponent from './chart.jsx';
import Percentage from './percentage.jsx';
import Budget from './budget.jsx'

class MainContainer extends Component {
    state = {  }
    render() {
        return (
           <div id="main-container">
               < ChartComponent />
               < Percentage />
               < Budget />
           </div> 
        );
    }
}

export default MainContainer;