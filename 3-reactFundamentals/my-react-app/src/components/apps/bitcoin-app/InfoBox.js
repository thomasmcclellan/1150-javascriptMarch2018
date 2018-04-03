import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const InfoCard = styled.div `
  display: inline-block;
  width: 50%;
  margin-bottom: 1em;
  text-align: center;
  color: #d9514e;
`

export default class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state ={
      dates: [],
      data: [],
      infoCurrent: [],
      infoPayout: []
    }
  }

  componentWillMount() {
    const infoData = this.props.data;
    let dates = [];
    let data = [];
    for (let thing in infoData) {
      let bitcoinDates = moment(thing).format('MMM DD');
      dates.push(bitcoinDates)
      data.push(infoData[thing])
    }
    this.setState({
      dates: dates,
      data: data,
      infoCurrent: data[30].toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      }),
      infoPayout: (data[30] - data[0]).toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      })
    })
  }
  
  render() {
    return (
      <div>
        <InfoCard>
          <div>
            <h3>Current Price:</h3>
          </div>
          <div>
            <h5>{this.state.infoCurrent}</h5>
          </div>
        </InfoCard>
        <InfoCard>
          <div>
            <h3>Change Since Last Month (USD):</h3>
          </div>
          <div>
            <h5>{ this.state.infoPayout }</h5>
          </div>
        </InfoCard>
      </div>
    );
  }
};