import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { fetchJokeList } from '../../store/actions';

interface Props {
  title: string,
}

export default function UpdateButton({ title }: Props) {
  const dispatch = useDispatch();

  function updateJokes() {
    dispatch(fetchJokeList());
  }

  return (
    <Button updateJokeList={updateJokes} title={title} />
  );
}
