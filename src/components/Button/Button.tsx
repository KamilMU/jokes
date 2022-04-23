import React from 'react';
import './styles.scss';

interface Props {
  title: string,
  updateJokeList: () => void
}

export function Button({ title, updateJokeList, ...props }: Props) {
  return (
    <button {...props} onClick={updateJokeList}>
      {title}
    </button>
  )
}
