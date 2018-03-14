import React from 'react';
import Home from './Home';
import Resources from './Resources';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
]