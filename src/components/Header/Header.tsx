import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  todoCounter: number;
}

export const Header: React.FC<HeaderProps> = ({todoCounter}) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>Todo List:
        <b> {todoCounter}</b> {todoCounter > 1 ? 'tasks' : 'task'}
      </div>
    </div>
  )
};