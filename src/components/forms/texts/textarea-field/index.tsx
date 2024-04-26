import styles from './styles.module.css';

type Props = Omit<React.ComponentProps<'textarea'>, 'name'> & {
  name: string;
};

export const TextareaField = (props: Props) => {
  return <textarea {...props} className={styles.root} />;
};
