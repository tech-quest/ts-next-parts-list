import styles from './styles.module.css';

type Props = {
  values: string[];
};

export const NumberList = ({ values }: Props) => {
  return (
    <ul className={styles.root}>
      {values.map((value, index) => {
        return (
          <li key={value} className={styles.item}>
            <span className={styles.number}>{index + 1}.</span>
            {value}
          </li>
        );
      })}
    </ul>
  );
};
