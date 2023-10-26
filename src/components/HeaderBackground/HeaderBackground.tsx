/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import styles from './HeaderBackground.module.scss';
import * as cx from 'classnames';

export const HeaderMenu = () => {
  const [isOffTop, setIsOffTop] = useState(false);
  const myRef = useRef<HTMLInputElement>(null);

  setInterval(() => {
    const offsetTop = myRef.current?.offsetTop;
    console.log(offsetTop);
    if (offsetTop) {
      setIsOffTop(offsetTop > 0 ? true : false);
    }
  }, 1000);

  return (
    <div ref={myRef} className={cx(styles.headerMenuContainer, isOffTop && styles.headerMenuStickToTop)} />
  );
};
