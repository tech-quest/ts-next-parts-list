import styles from './styles.module.css';

type Props = {
  value: string;
  color: 'primary' | 'error' | 'warning' | 'gray';
};

export const Chip = ({ value, color }: Props) => {
  return <div className={`${styles.root} ${styles[color]}`}>{value}</div>;
};
