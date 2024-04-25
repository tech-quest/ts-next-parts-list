import styles from './styles.module.css';

type Props = {
  values: string[];
};

export const BulletList = ({ values }: Props) => {
  return (
    <ul className={styles.root}>
      {values.map((value) => {
        return (
          <li key={value} className={styles.item}>
            {value}
          </li>
        );
      })}
    </ul>
  );
};
