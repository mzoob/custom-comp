import { Parallax } from 'rc-scroll-anim';
import styles from './scrollAnimation.module.scss';
import cover from './cover.jpeg';

export const ScrollAnimation = () => {
  return <div className={styles.container}>
    <Parallax
      animation={[
        { width: '100vw', playScale: [0, 0.9]},
        // { position: 'fixed', playScale: [0, 0.1]},
        // { blur: '0px', backgroundColor: '#F38EAD', playScale: [0, 0.2] },
        // {
        //   translateX: -100,
        //   boxShadow: '5px 5px 5px #000',
        //   color: '#fff000',
        //   playScale: [0, 0.2],
        // },
        // { translateX: 100, playScale: [0, 0.2] },
        // { translateX: 0, playScale: [0, 0.2] },
      ]}
      style={{ display: 'flex', justifyContent: 'center', width: '40vw' }}
      className="demo-content parallax-shape"
    >
      <img className={styles.cover} src={cover}/>
    </Parallax>
  </div>
}
