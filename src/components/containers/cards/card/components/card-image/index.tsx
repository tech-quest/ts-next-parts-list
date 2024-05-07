import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.css';

type Props = {
  src: string | StaticImageData;
  alt?: string;
};

export const CardImage = ({ src, alt }: Props) => {
  return (
    <figure className={styles.root}>
      <Image src={src} alt={alt ?? ''} className={styles.image} />
    </figure>
  );
};
