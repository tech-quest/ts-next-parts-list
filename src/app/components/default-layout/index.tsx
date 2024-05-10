'use client';

import { useEffect, useState } from 'react';
import { DefaultMenu } from './default-menu';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.logo}>Parts List サンプル</div>
        <nav className={styles.navigation}>
          <button className={styles.button} onClick={handleClick}>
            <i className={styles.hamburger} />
          </button>
          <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <DefaultMenu items={links} />
          </div>
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

const links = [
  { href: '/', label: 'ホーム' },
  { href: '/typography-parts', label: 'テキスト系パーツ' },
  { href: '/action-parts', label: 'アクション系パーツ' },
  { href: '/container-parts', label: 'コンテナ系パーツ' },
  { href: '/misc-parts', label: 'その他一般パーツ' },
];
