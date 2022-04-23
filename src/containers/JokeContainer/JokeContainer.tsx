import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Joke from '../../components/Joke';
import { addJokeToFavourites } from '../../store/actions';
import { JokeType } from '../../types';

interface Props {
  joke: JokeType,
}

export function JokeContainer({ joke }: Props) {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const dispatch = useDispatch();

  function addJokeToFavoutiteList() {
    dispatch(addJokeToFavourites(joke));
    setIsAddedToFav(true);
  }

  return (
    <Joke joke={joke} onFavouriteClick={addJokeToFavoutiteList} isAddedToFav={isAddedToFav} />
  )
}
