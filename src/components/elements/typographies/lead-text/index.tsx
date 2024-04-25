import styles from './styles.module.css';

type Props = {
  value: string;
};

export const LeadText = ({ value }: Props) => {
  return <p className={styles.root}>{value}</p>;
};
