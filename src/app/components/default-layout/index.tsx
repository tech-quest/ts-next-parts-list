import { DefaultMenu } from './default-menu';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.logo}>Parts List サンプル</div>
        <nav className={styles.navigation}>
          <DefaultMenu items={utilityLinks} />
          <h2 className={styles.heading}>一般パーツ</h2>
          <DefaultMenu items={elementLinks} />
        </nav>
      </header>
      <div className={styles.main}>
        <main className={styles.contents}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.copyright}>
            Copyright © All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

const utilityLinks = [{ href: '/', label: 'ホーム' }];
const elementLinks = [
  { href: '/typography-parts', label: 'テキスト系パーツ' },
  { href: '/action-parts', label: 'アクション系パーツ' },
  { href: '/misc-parts', label: 'その他一般パーツ' },
];
