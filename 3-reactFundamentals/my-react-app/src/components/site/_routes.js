import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSX/JSXRules';

export const routes = [
  {
    path: '/' || '/home',
    exact: true,
    main: () => <Home/>
  },
  {
    path: '/functionalcomponent',
    exact: true,
    main: () => <FunctionalComponentDemo/>
  },
  {
    path: '/jsxrules',
    exact: true,
    main: () => <JSXRules/>
  },
  {
    path: '/resources',
    exact: true,
    main: () => <Resources/>
  }
]