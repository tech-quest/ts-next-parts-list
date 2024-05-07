import styles from './styles.module.css';

type Props = {
  heading: string;
  sub?: string;
};

export const CardHeader = ({ heading, sub }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>{heading}</div>
      {sub && <div className={styles.sub}>{sub}</div>}
    </div>
  );
};
