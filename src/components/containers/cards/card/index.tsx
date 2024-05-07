import { CardBody } from './components/card-body';
import { CardFooter } from './components/card-footer';
import { CardHeader } from './components/card-header';
import { CardImage } from './components/card-image';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
};

const CardRoot = ({ children, maxWidth }: Props) => {
  return (
    <div className={styles.root} style={{ maxWidth }}>
      {children}
    </div>
  );
};

CardRoot.Header = CardHeader;
CardRoot.Image = CardImage;
CardRoot.Body = CardBody;
CardRoot.Footer = CardFooter;

export const Card = CardRoot;
