import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';

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
    path: '/resources',
    exact: true,
    main: () => <Resources/>
  }
]