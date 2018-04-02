import React, { Component } from 'react';
import moment from 'moment';
import InfoBox from './InfoBox';
import LineChart from './LineChart';

export default class Bitcoin extends Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }

  componentDidMount() {
    const getData = () => {
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
      
      fetch(url)
        .then(response => response.json())
        .then(bitcoinData => {
          // console.log(bitcoinData.bpi);
          let sortedData = [];
          let count = 0;
          for (let bcDate in bitcoinData.bpi) {
            sortedData.push({
              date: moment(bcDate).format('MM DD'),
              payout: bitcoinData.bpi[bcDate].toLocaleString('us-EN', {
                style: 'currency',
                currency: 'USD'
              }),
              prevDays: count,
              numPrice: bitcoinData.bpi[bcDate]
            });
            console.log(sortedData)
            count++
            // console.log(count);
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          });
        })
        .catch(e => {
          console.log(e);
        })
    };
    getData();
  }

  render() {
    return (
      <div className='main'>
        <div className='mainDiv'>
          <h1>30 Day Bitcoin Price Chart</h1>
          { !this.state.fetchingData ? <InfoBox data={ this.state.data }/> : null }
          { !this.state.fetchingData ? <LineChart data={ this.state.data }/> : null }
        </div>
      </div>
    );
  }
};