import styles from './styles.module.css';

type Props = {
  columns: 2 | 3 | 4;
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
};

export const RowGrid = ({ columns, children, align }: Props) => {
  return (
    <div
      className={`${styles.root} ${styles[`grid${columns}`]} ${align ? styles[align] : ''}`}
    >
      {children}
    </div>
  );
};
