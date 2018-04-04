import React, { Component } from 'react';
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
      payout: [],
      infoCurrent: [],
      infoPayout: []
    }
  }

  componentWillMount() {
    const infoData = this.props.data;
    let payout = [];
    for (let thing in infoData) {
      payout.push(infoData[thing])
    }
    this.setState({
      payout: payout,
      infoCurrent: payout[30].toLocaleString('us-EN', { style: 'currency', currency: 'USD' }),
      infoPayout: (payout[30] - payout[0]).toLocaleString('us-EN', { style: 'currency', currency: 'USD' })
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