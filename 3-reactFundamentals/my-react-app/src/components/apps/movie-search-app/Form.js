import React, { Component } from 'react';
import FormResults from './FormResults';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    // console.log(document.getElementById('searchInput'));
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = '0e76839c220f8cd14781642556be97aa';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ key }&language=en-US&query=${ val }&page=1&include_adult=false`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error:', response.status);
          return;
        }

        response.json()
          .then(data => {
            const results = data.results;
            this.setState({ results });
          });
      })

      .catch(err => {
        console.log('Fetch Error:', err);
      })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } id='form'>
        <input 
          onKeyUp={ this.handleKeyUp } 
          id='searchInput' 
          className='searchBar' 
          type='text' 
          placeholder='Search a movie!' 
          required
        />
        <FormResults results={ this.state.results }/>
      </form>
    );
  }
};