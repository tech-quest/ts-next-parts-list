import styles from './styles.module.css';

type Item = {
  value: string;
  label: string;
};
type Props = Omit<
  React.ComponentProps<'input'>,
  'name' | 'type' | 'value' | 'defaultChecked'
> & {
  name: string;
  items: Item[];
};

export const CheckboxField = ({
  name,
  items,
  defaultValue,
  ...inputProps
}: Props) => {
  return (
    <div className={styles.root}>
      <fieldset id={name} className={styles.radios}>
        {items.map((item, index) => {
          const id = `${name}-${index}`;

          return (
            <div key={item.value} className={styles.item}>
              <input
                {...inputProps}
                type="checkbox"
                id={id}
                className={styles.input}
                name={name}
                value={item.value}
                defaultChecked={defaultValue === item.value}
              />
              <label htmlFor={id} className={styles.label}>
                <div className={styles.tick} />
                {item.label}
              </label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};
