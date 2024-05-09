import styles from './styles.module.css';

type Props = {
  bodyRows: React.ReactNode;
  headRows?: React.ReactNode;
  colgroup?: React.ReactNode;
};

export const DataTable = ({ bodyRows, headRows, colgroup }: Props) => {
  return (
    <div className={styles.root}>
      <table className={styles.table}>
        {colgroup}
        {headRows && <thead>{headRows}</thead>}
        <tbody>{bodyRows}</tbody>
      </table>
    </div>
  );
};
