import React from 'react';
import { JokeType } from '../../types';
import './styles.scss';

interface Props {
  joke: JokeType,
  onFavouriteClick: () => void,
  isAddedToFav: boolean,
  jokeStatus: string,
}

export function Joke({ joke, onFavouriteClick, jokeStatus }: Props) {
  return (
    <div className="joke-container" data-testid='joke-item'>
      <div className="joke-container__id">joke id: {joke?.id}</div>
      <div className="joke-container__setup">{joke?.setup}</div>
      <div className="joke-container__punchline">{joke?.punchline}</div>
      <div>
        <span className="joke-container__fav-icon" onClick={onFavouriteClick} style={{ opacity: joke?.favourited ? 1 : .3 }}>
          ⭐
        </span>
        <div className="joke-container__joke-status">{jokeStatus}</div>
      </div>
    </div>
  )
}
