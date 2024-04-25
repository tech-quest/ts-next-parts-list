import { ComponentProps } from 'react';
import { Heading } from '@/components/elements/headings/heading';

import styles from './styles.module.css';

type Props = ComponentProps<typeof Heading>;

export const HeadingWithUnderline = ({ variant, value }: Props) => {
  return (
    <div className={styles.root}>
      <Heading variant={variant} value={value}></Heading>
    </div>
  );
};
