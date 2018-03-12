import React, { Component } from 'react';
import ChartComponent from './chart.jsx';
import Percentage from './percentage.jsx';
import Budget from './budget.jsx'
import Add from './add.jsx';


class MainContainer extends Component {
    state = {  }
    render() {
        return (
        <div>
            <div>
                < Add />
            </div>
            <div id="main-container">
               < ChartComponent />
               < Percentage />
               < Budget />
            </div>
        </div> 
        );
    }
}

export default MainContainer;