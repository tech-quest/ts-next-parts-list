import styles from './styles.module.css';

type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: string;
};

export const Heading = ({ variant, value }: Props) => {
  const Root = variant;

  return <Root className={`${styles.root} ${styles[variant]}`}>{value}</Root>;
};
