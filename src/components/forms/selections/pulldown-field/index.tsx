import styles from './styles.module.css';

type Item = {
  value: string;
  label: string;
};
type Props = Omit<React.ComponentProps<'select'>, 'name'> & {
  name: string;
  items: Item[];
};

export const PulldownField = ({ name, items, ...selectProps }: Props) => {
  return (
    <div className={styles.root}>
      <select {...selectProps} id={name} name={name} className={styles.select}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
