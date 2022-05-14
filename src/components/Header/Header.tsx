import React from 'react';
import './styles.scss';

interface Props {
  navbar: boolean
}

export default function Header({ navbar }: Props) {
  return (
    <header className={navbar ? 'header scrolled-header' : 'header'}>
      <a href="/#">Jokes</a>
    </header>
  );
}
