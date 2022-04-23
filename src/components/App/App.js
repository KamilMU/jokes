import React, { useState } from 'react';
import './styles.scss';
import Header from '../Header';
import JokeList from '../JokeList';
import UpdateButton from '../../containers/UpdateButton';

export function App() {
  return (
    <div className="app">
      <Header />
      <JokeList />
      <UpdateButton
        title="change jokes"
      />
    </div>
  )
}