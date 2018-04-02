import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSX/JSXRules';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import NytApp from '../apps/nyt-app/NytApp';
import FriendListApp from '../apps/friends-list-app/FriendListApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import YouTubeApiApp from '../apps/youtube-api-app/Video';
import GithubCardApp from '../apps/github-api-app/GithubApp';
import GithubCardAppWithSearch from '../apps/github-api-app/GithubCarAppWithSearch';
import BitcoinApp from '../apps/bitcoin-app/Bitcoin';
import Bitcoin2 from '../apps/bitcoin2/Bitcoin';

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
    path: '/lifecyclediagram',
    exact: true,
    main: () => <LifeCycleCodepen/>
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
    path: '/nytapp',
    exact: true,
    main: () => <NytApp/>
  },
  {
    path: '/friendlist',
    exact: true,
    main: () => <FriendListApp/>
  },
  {
    path: '/movie',
    exact: true,
    main: () => <MovieSearchApp/>
  },
  {
    path: '/youtube',
    exact: true,
    main: () => <YouTubeApiApp/>
  },
  {
    path: '/github',
    exact: true,
    main: () => <div>
                  <GithubCardApp/>
                  <br/>
                  <GithubCardAppWithSearch/>
                </div>
  },
  {
    path: '/bitcoin',
    exact: true,
    main: () => <BitcoinApp/>
  },
  {
    path: '/bitcoin2',
    exact: true,
    main: () => <Bitcoin2/>
  },
  {
    path: '/resources',
    exact: true,
    main: () => <Resources/>
  }
]