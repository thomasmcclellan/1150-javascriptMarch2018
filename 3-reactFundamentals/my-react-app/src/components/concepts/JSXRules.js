import React from 'react';
import JSXCompiler from '../JSXCompiler';

const JSXRules = () => {
  return (
    <div className='main'>
      <div className='mainDiv'>
        <h1 className='section-title'>JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not HTML; rather, it is actually closer to JavaScript</dd>
          <dt>'React Elements'</dt>
          <dd>These are used to construct and update the DOM, or what you see in the browser window</dd>
          <dt>JSX is NOT required</dt>
          <dd>You can write your return in vanilla JS, but most people who use React gravitate towards JSX</dd>
        </dl>
        <hr/>
        <h1>Egghead.io's JSX Compiler</h1>
        <JSXCompiler/>
      </div>
    </div>
  );
}

export default JSXRules;