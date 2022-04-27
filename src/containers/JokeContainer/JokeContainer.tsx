import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Joke from '../../components/Joke';
import { toggleJokeToFavourites } from '../../store/actions';
import { IRootState, JokeType } from '../../types';

interface Props {
  joke: JokeType,
}

export function JokeContainer({ joke }: Props) {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [jokeStatus, setJokeStatus] = useState('');
  const dispatch = useDispatch();

  function addJokeToFavoutiteList() {
    dispatch(toggleJokeToFavourites(joke.id, joke));
    setIsAddedToFav(!isAddedToFav);

    if (!isAddedToFav) {
      setTimeout(() => setJokeStatus('added to favorites!'), 0)
      setTimeout(() => setJokeStatus(''), 1000)
    }
    if (isAddedToFav) {
      setTimeout(() => setJokeStatus('removed from favorites!'), 0)
      setTimeout(() => setJokeStatus(''), 1000)
    }
  }

  return (
    <Joke joke={joke} onFavouriteClick={addJokeToFavoutiteList} isAddedToFav={isAddedToFav} jokeStatus={jokeStatus} />
  )
}
