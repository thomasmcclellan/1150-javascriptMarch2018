import React, { Component } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state ={
      dates: [],
      data: []
    }
  }

  componentWillMount() {
    const unsortedData = this.props.data;
    let dates = [];
    let data = [];
    for (let thing in unsortedData) {
      let bitcoinDates = moment(thing).format('MMM DD');
      dates.push(bitcoinDates)
      data.push(unsortedData[thing])
    }
    this.setState({
      dates: dates,
      data: data
    })
  }

  componentDidMount() {
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
      type: 'line',
      data: {
        labels: this.state.dates,
        datasets: [{
          data: this.state.data,
          backgroundColor: 'rgba(217, 81, 78, 0.25)',
          borderColor: 'rgba(217, 81, 78, 1.0)',
          borderWidth: 1
        }]
      },
      // Legend off
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxis: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render() {
    return(
      <canvas id='myChart'></canvas>
    )
  }
};