import * as React from 'react';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import JokeList from '../../containers/JokeList/JokeList';
import UpdateButton from '../../containers/UpdateButton/UpdateButton';
import './styles.scss';

export default function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <JokeList />
      <UpdateButton
        title="change jokes"
      />
    </div>
  );
}
