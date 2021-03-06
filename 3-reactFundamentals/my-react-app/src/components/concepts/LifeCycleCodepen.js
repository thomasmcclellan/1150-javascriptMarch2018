import React, { Component } from 'react';

class LifeCycleCodepen extends Component{
  constructor(props) {
    super(props);
  }

  render () {
    const src  = `//codepen.io/thomasmcclellan/`;
    const user = `http://codepen.io/thomasmcclellan`;
    const pen  = `${ user }/pen/${ this.props.hash }/`;

    return (
      <div className='main'>
        <div className='mainDiv'>
          <h1>Life Cycle Codepen</h1>
          <iframe className='col-md-12' title="Codepen Project" width={ this.props.width } height={ this.props.height } scrolling="yes" src={ src } frameBorder="no" allowFullScreen="true" style={{ height: '30em', width: this.props.width }}>
            <a href={ pen }>See this pen</a> by { this.props.user } (<a href={ user }>@{ this.props.user }</a>) on <a href='https://codepen.io/thomasmcclellan/'>CodePen</a>.
          </iframe>
        </div>
      </div>
    );
  }
};

export default LifeCycleCodepen;