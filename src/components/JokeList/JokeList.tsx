import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JokeContainer from '../../containers/JokeContainer';
import { fetchJokeList } from '../../store/actions';
import { IRootState, JokeType } from '../../types';
import Loader from '../Loader';
import './styles.scss';

export function JokeList() {
  const jokes = useSelector((state: IRootState) => state.jokeList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJokeList(1));
  }, []);

  return (
    <>
      <div className='joke-list-container'>
        {jokes.length ? jokes.map((joke, index) => (
          <JokeContainer
            joke={joke}
            key={index}
          />
        )) : (
          <Loader />
        )}
      </div>
    </>
  );
}