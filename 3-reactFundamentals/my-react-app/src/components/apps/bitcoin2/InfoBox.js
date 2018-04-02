import React, { Component } from 'react';
import moment from 'moment';

export default class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      currentPrice: null,
      monthChangeDate: null,
      monthChangePayout: null,
      updatedAt: null
    }
  }
  componentDidMount() {
    this.getData = () => {
      const { data } = this.props;
      const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

      fetch(url)
        .then(response => response.json())
        .then(bitcoinData => {
          let price = bitcoinData.bpi.USD.rate_flaot;
          console.log(bitcoinData.bpi.USD.rate_flaot)
        })
    }
    this.getData();
  }

  render() {
    return (
      <div id='data-container'>
        { this.state.currentPrice ? 
          <div className='box' id='left'>
            <div className='heading'>
              { this.state.currentPrice.toLocaleString('us-EN', { 
                style: 'currency',
                currency: 'USD'
              })}
            </div>
            <div className='subtext'>
              { `Updated ${ moment(this.state.updatedAt).fromNow() }` }
            </div>
          </div>
        : null }
        { this.state.currentPrice ? 
          <div className='box' id='middle'>
            <div className='heading'>
              { this.state.monthChangeDate }
            </div>
            <div className='subtext'>
              Change Since Last Month (USD)
            </div>
          </div>
        : null }
        <div className='box' id='right'>
          <div className='heading'>
            { this.state.monthChangePayout }
          </div>
          <div className='subtext'>
            Change Since Last Month (%)
          </div>
        </div>
      </div>
    );
  }
};