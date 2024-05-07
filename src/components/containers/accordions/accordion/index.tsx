'use client';
import { useState } from 'react';
import styles from './styles.module.css';

type Props = {
  heading: string | React.ReactNode;
  children: React.ReactNode;
};

export const Accordion = ({ heading, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root}>
      <button
        className={`${styles.heading}  ${isOpen ? styles.open : ''}`}
        onClick={handleClick}
      >
        {heading}
      </button>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
