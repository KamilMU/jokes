import * as React from 'react';
import './styles.scss';
import JokeList from '../../containers/JokeList';
import UpdateButton from '../../containers/UpdateButton';
import HeaderContainer from '../../containers/HeaderContainer';

export function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <JokeList />
      <UpdateButton
        title="change jokes"
      />
    </div>
  )
}