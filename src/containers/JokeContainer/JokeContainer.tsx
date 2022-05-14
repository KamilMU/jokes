import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Joke from '../../components/Joke/Joke';
import { toggleJokeToFavourites } from '../../store/actions';
import { JokeType } from '../../types';

interface Props {
  joke: JokeType,
}

export default function JokeContainer({ joke }: Props) {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [jokeStatus, setJokeStatus] = useState('');
  const dispatch = useDispatch();

  function addJokeToFavoutiteList() {
    dispatch(toggleJokeToFavourites(joke.id, joke));
    setIsAddedToFav(!isAddedToFav);

    if (!isAddedToFav) {
      setTimeout(() => setJokeStatus('added to favorites!'), 0);
      setTimeout(() => setJokeStatus(''), 1000);
    }
    if (isAddedToFav) {
      setTimeout(() => setJokeStatus('removed from favorites!'), 0);
      setTimeout(() => setJokeStatus(''), 1000);
    }
  }

  return (
    <Joke
      joke={joke}
      onFavouriteClick={addJokeToFavoutiteList}
      jokeStatus={jokeStatus}
    />
  );
}
