import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const Panel = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};
