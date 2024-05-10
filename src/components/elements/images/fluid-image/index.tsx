import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

type Props = {
  src: string | StaticImageData;
  alt?: string;
};

export const FluidImage = ({ src, alt }: Props) => {
  return <Image src={src} alt={alt ?? ''} className={styles.root} />;
};
