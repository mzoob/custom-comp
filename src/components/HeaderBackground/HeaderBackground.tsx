/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styles from './HeaderBackground.module.scss';
import * as cx from 'classnames';

export const HeaderMenu = () => {
  const [isOffTop, setIsOffTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsOffTop(scrollTop > 0 ? true : false);
    return;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className={cx(styles.headerMenuContainer, isOffTop && styles.headerMenuStickToTop)}>
    </div>
  );
};
