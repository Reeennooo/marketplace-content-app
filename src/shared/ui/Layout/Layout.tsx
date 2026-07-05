import {type FC, memo, type ReactNode, useEffect, useRef, useState} from 'react';
import styles from './layout.module.css';
import {Footer} from '../Footer/Footer.tsx';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  hasTopInset?: boolean;
}

export const Layout: FC<IProps> = memo((props) => {
  const {children, header, footer} = props;
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight);
    }
  }, [footer]);

  return (
    <div
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      overflow-y-scroll
      bg-background
    `}>
      {header}
      <main
        style={{paddingBottom: footerHeight}}
        className={classNames(
          'flex',
          'flex-col',
          styles.main
        )}
      >
        {children}
      </main>
      {
        footer
        && (
          <Footer innerRef={footerRef}>
            {footer}
          </Footer>
        )
      }
    </div>
  );
});