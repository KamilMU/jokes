import React from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { fetchJokeList } from '../../store/actions';

export function UpdateButton({ title, ...props }) {
  const dispatch = useDispatch();

  function updateJokes() {
    dispatch(fetchJokeList());
  }

  return (
    <Button {...props} onClick={updateJokes} title={title} />
  )
}