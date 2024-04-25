import styles from './styles.module.css';

type Props = {
  message: string;
  color: 'error' | 'warning';
};

export const AlertMessage = ({ message, color }: Props) => {
  return <div className={`${styles.root} ${styles[color]}`}>{message}</div>;
};
