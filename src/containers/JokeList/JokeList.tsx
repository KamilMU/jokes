import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JokeContainer from '../JokeContainer/JokeContainer';
import { fetchJokeList } from '../../store/actions';
import { IRootState } from '../../types';
import Loader from '../../components/Loader/Loader';
import './styles.scss';

export default function JokeList() {
  const jokes = useSelector((state: IRootState) => state.jokeList);
  const favorites = useSelector((state: IRootState) => state.favouriteJokes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(jokes, 'jokes');
    console.log(favorites, 'favorites');
  }, [jokes]);

  useEffect(() => {
    if (jokes?.length === 0) {
      dispatch(fetchJokeList());
    }
  }, []);

  return (
    <div className="joke-list-container">
      {jokes?.length && jokes ? jokes.map((joke) => (
        <JokeContainer
          joke={joke}
          key={joke.id}
        />
      )) : (
        <Loader />
      )}
    </div>
  );
}
