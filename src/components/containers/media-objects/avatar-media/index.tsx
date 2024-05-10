import { StaticImageData } from 'next/image';
import { FluidImage } from '@/components/elements/images/fluid-image';

import styles from './styles.module.css';
import noImage from './assets/images/no-image.png';

type Props = {
  children: React.ReactNode;
  src?: string | StaticImageData;
};

export const AvatarMedia = ({ children, src }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <FluidImage src={src ?? noImage} />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
