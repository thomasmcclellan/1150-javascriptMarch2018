import React, { Component } from 'react';
import NytResults from './NytResults';
import styled from 'styled-components';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'b2e02612e179494c9f1f57577b582a0a';

const SubmitButton = styled.button `
  border-radius: 3px;
  padding: 5px; 
  background-color: teal;
  color: white;
  border: 1px solid teal;
`;

const FormInput = styled.input `
  padding: 5px;
  color: teal;
  border-radius: 3px;
  background-color: lightgrey;
`;

export default class NytApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      startDate: '',
      endDate: '',
      pageNumber: 0,
      results: []
    };
  }

  fetchResults = () => {
    let url = `${ baseURL }?api-key=${ key }&page=${ this.state.pageNumber }&q=${ this.state.search }`
    url = this.state.startDate ? url + `&begin_date=${ this.state.startDate }` : url;
    url = this.state.endDate ? url + `&end_date=${ this.state.endDate }` : url;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({ results: data.response.docs })
      })
  }

  handleSubmit = (event) => {
    this.setState({ pageNumber: 0 })
    this.fetchResults();
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  changePageNumber = (e, direction) => {
    e.preventDefault();
    if (direction === 'down') {
      if (this.state.pageNumber > 0) {
        let newPageNumber = this.state.pageNumber - 1;
        this.setState({ pageNumber: newPageNumber })
        this.fetchResults();
      }
    }
    if (direction === 'up') {
      let newPageNumber = this.state.pageNumber + 1;
      this.setState({ pageNumber: newPageNumber })
      this.fetchResults();
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='mainDiv'>
          <form onSubmit={ e => this.handleSubmit(e) }>
            <span>Enter a SINGLE search term (required): </span>
            <FormInput type='text' name='search' onChange={ this.handleChange } required/>
            <br/>
            <span>Enter a Start Date: </span>
            <FormInput type='date' name='startDate' patter='[0-9]{ 8 }' onChange={ this.handleChange }/>
            <br/>
            <span>Enter an End Date: </span>
            <FormInput type='date' name='endDate' pattern='[0-9]{ 8 }' onChange={ this.handleChange }/>
            <br/>
            <SubmitButton className='submit'>Submit Search</SubmitButton>
          </form>
          { 
            this.state.results.length > 0 ? <NytResults results={ this.state.results } changePage={ this.changePageNumber }/> : <div></div> 
          }
        </div>
      </div>
    );
  }
};