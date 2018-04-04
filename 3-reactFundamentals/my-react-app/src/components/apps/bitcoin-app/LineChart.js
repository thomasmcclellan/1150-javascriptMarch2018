import React, { Component } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state ={
      dates: [],
      payout: []
    }
  }

  componentWillMount() {
    const unsortedData = this.props.data;
    let dates = [];
    let payout = [];
    for (let item in unsortedData) {
      let bitcoinDates = moment(item).format('MMM DD');
      dates.push(bitcoinDates)
      payout.push(unsortedData[item])
    }
    this.setState({
      dates: dates,
      payout: payout
    })
  }

  componentDidMount() {
    var chartContext = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(chartContext, {
      type: 'line',
      data: {
        labels: this.state.dates,
        datasets: [{
          data: this.state.payout,
          backgroundColor: '#d9514e80', 
          borderColor: '#d9514e',
          borderWidth: 2
        }]
      },
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
    return (
      <canvas id='myChart'></canvas>
    );
  }
};