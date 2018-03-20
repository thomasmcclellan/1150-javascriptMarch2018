import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSX/JSXRules';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';

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
    path: '/classcomponent',
    exact: true,
    main: () => <ClassComponentDemo/>
  },
  {
    path: '/propsdemo',
    exact: true,
    main: () => <PropsDemo/>
  },
  {
    path: '/timer',
    exact: true,
    main: () => <TimePiecesApp/>
  },
  {
    path: '/reactconceptlist',
    exact: true,
    main: () => <ReactConceptsApp/>
  },
  {
    path: '/resources',
    exact: true,
    main: () => <Resources/>
  }
]