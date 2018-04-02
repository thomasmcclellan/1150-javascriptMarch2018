import React, { Component } from 'react';
import Chart from 'chart.js';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: this.sortedData
    }
  }

  componentDidMount() {
    // const { sortedData } = this.props;
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
      type: 'line',
      data: {
        labels: ['March 02','','','','','','','','','','','','','','','','','','','','','','','','','','','','','April 01'],
        // labels: [ this.state.data.date ], // X-axis 
        datasets: [{
          label: '30-Day Bitcoin',
          data: [11019, 11438, 11479, 11432, 10709, 9906,9299, 9237, 8787, 9532, 9118, 9144,8196, 8256, 8269, 7862, 8192, 8594, 8915, 8895, 8712, 8919, 8535, 8449, 8138, 7790, 7937, 7086, 6844, 6926, 6816],
          // data: [], // Data points
          backgroundColor: 'rgba(217, 81, 78, 0.2)',
          borderColor: 'rgba(217, 81, 78, 1.0)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxis: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    console.log(this.data)
  }

  render() {
    return(
      <canvas id='myChart'></canvas>
    )
  }
};