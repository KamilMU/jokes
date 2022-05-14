import React from 'react';
import './styles.scss';

interface Props {
  title: string,
  updateJokeList: () => void
}

export default function Button({ title, updateJokeList }: Props) {
  return (
    <button type="button" onClick={updateJokeList}>
      {title}
    </button>
  );
}
