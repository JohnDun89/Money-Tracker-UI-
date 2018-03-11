import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

class ChartContainer extends React.Component {
    state = {  }


    
    render() {
        defaults.global.defaultFontColor = '#FFF8F0';
        defaults.global.defaultFontSize = 16;
        return (
            <div id="chart-container">
            <div id="chart">
            
                < Line data= {{	
                    datasets: [{
                        label: 'Amount Spent',
                        data: [15, 12, 30, 5, 10, 33, 3.5],
                        backgroundColor: [
                            'rgba(0, 0, 0, 0.0)'
                        ],
                        borderColor: [
                            '#FFF8F0'
   
                        ],
                        borderWidth: 5
                    }, 
                        {
                            label: 'Target',
                            data: [8, 8, 8, 8, 20, 10, 10],
                            backgroundColor: [
                                'rgba(0, 0, 0, 0.0)'

                            ],
                            borderColor: [
                                '#E2C851'

                            ],
                            borderWidth: 5
                        }
                        
                        ],
                   
                    labels: ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"]
                }} 
                
                options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]},
                    fontColor: '#E2C851',
                    defaultFontColor: '#E2C851',
                    elements: {
                         line: {
                             tension: 0, // disables bezier curves
                             
                         }
                     },
                    legend: {
                         display: false
                     }
                 }}
                        
    
                />
            </div>
            </div>
        );
    }
}

export default ChartContainer;