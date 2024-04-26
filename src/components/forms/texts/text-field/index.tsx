import styles from './styles.module.css';

type Props = Omit<React.ComponentProps<'input'>, 'name' | 'type'> & {
  type: 'text' | 'password' | 'email';
  name: string;
};

export const TextField = (props: Props) => {
  return <input {...props} className={styles.root} />;
};
