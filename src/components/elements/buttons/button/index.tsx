import Link from 'next/link';

import styles from './styles.module.css';

type ButtonProps = {
  type: 'button' | 'submit';
  value: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type LinkProps = {
  type: 'link';
  value: string;
  href: string;
  target?: '_blank';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

// MEMO: type の値によって受け取る props が変わる
type Props = ButtonProps | LinkProps;

export const Button = (props: Props) => {
  if (props.type === 'link') {
    return (
      <Link
        className={styles.root}
        href={props.href}
        target={props.target}
        rel={props.target ? 'noopener noreferrer' : undefined}
        onClick={props.onClick}
      >
        {props.value}
        {props.target && <i className={styles.blank} />}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      className={styles.root}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};
