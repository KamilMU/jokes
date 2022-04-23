import React from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { fetchJokeList } from '../../store/actions';

interface Props {
  title: string,
}

export function UpdateButton({ title, ...props }: Props) {
  const dispatch = useDispatch();

  function updateJokes() {
    dispatch(fetchJokeList());
  }

  return (
    <Button {...props} updateJokeList={updateJokes} title={title} />
  )
}