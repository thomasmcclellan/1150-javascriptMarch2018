import React, { Component } from 'react';
import InfoBox from './InfoBox';
import LineChart from './LineChart';

export default class Bitcoin extends Component {
  constructor() {
    super();
    this.state = {
      fetchingData: true,
      data: [],
    }
  }

  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    fetch(url)
      .then(response => response.json())
      .then(bitcoinData => {
        // console.log(bitcoinData.bpi);
        this.setState({
          data: bitcoinData.bpi,
          fetchingData: false
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return (
      <div className='main'>
        <div className='mainDiv'>
          <h1>30 Day Bitcoin Price Chart</h1>
          { !this.state.fetchingData ? <InfoBox data={ this.state.data }/> : null }
          { !this.state.fetchingData ? <LineChart data={ this.state.data } /> : null }
        </div>
      </div>
    );
  }
};