'use client';
import { useState } from 'react';

import styles from './styles.module.css';

type Props = {
  length: number;
  defaultPage?: number;
  offset?: number;
  onChangePage?: (current: number) => void;
};

export const Pagination = ({
  length,
  defaultPage,
  offset,
  onChangePage,
}: Props) => {
  const [current, setCurrent] = useState(defaultPage ?? 1);

  const config = createPageConfig(length, current, offset);

  const handleClick = (page: number) => {
    setCurrent(page);
    onChangePage?.(page);
  };

  return (
    <nav className={styles.root}>
      <button
        className={styles.prev}
        onClick={() => handleClick(current - 1)}
        disabled={current === 1}
      >
        <i className={styles.offscreen}>prev</i>
      </button>
      <ol className={styles.pages}>
        {config.isLeftEllipsis && <li>...</li>}
        {config.pages.map((page) => {
          return (
            <li key={page}>
              <button
                className={`${styles.button} ${current === page ? styles.current : ''}`}
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        {config.isRightEllipsis && <li>...</li>}
      </ol>
      <button
        className={styles.next}
        onClick={() => handleClick(current + 1)}
        disabled={current === length}
      >
        <i className={styles.offscreen}>next</i>
      </button>
    </nav>
  );
};

export const createPageConfig = (
  length: number,
  current: number,
  offset?: number
) => {
  const pages = Array.from({ length }, (_, index) => index + 1);

  // MEMO: offset が指定されていない場合は、全ページを表示
  if (!offset) return { pages, isLeftEllipsis: false, isRightEllipsis: false };

  // MEMO: current - offset が 1 以下の場合は、右側だけ省略
  if (current - offset <= 1) {
    return {
      pages: pages.slice(0, offset * 2 + 1),
      isLeftEllipsis: false,
      isRightEllipsis: true,
    };
  }

  // MEMO: current + offset が最大ページ数以上の場合は、左側だけ省略
  if (current + offset >= length) {
    return {
      pages: pages.slice(-offset * 2 - 1),
      isLeftEllipsis: true,
      isRightEllipsis: false,
    };
  }

  // MEMO: それ以外の場合は、両側を省略
  return {
    pages: pages.slice(current - offset - 1, current + offset),
    isLeftEllipsis: true,
    isRightEllipsis: true,
  };
};
