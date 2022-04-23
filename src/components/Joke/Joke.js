import React from 'react';
import './styles.scss';

export function Joke({ joke, onFavouriteClick, isAddedToFav }) {
  return (
    <div className="joke-container">
      <div className="joke-container__id">ID: {joke.id}</div>
      <div className="joke-container__setup">{joke.setup}</div>
      <div className="joke-container__punchline">{joke.punchline}</div>
      <span className="joke-container__fav-icon" onClick={onFavouriteClick} style={{ opacity: isAddedToFav ? 1 : .3}}>⭐</span>
    </div>
  )
}
