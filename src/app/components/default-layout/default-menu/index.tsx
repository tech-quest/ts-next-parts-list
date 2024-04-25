import { NavLink } from './components/nav-link';
import styles from './styles.module.css';

type Props = {
  items: { href: string; label: string }[];
};

export const DefaultMenu = ({ items }: Props) => {
  return (
    <ul className={styles.root}>
      {items.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href} className={styles.link}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
