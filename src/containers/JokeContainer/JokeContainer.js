import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Joke from '../../components/Joke';
import { addJokeToFavourites } from '../../store/actions';

export function JokeContainer({ joke }) {
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
