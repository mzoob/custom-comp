import styles from './scrollAnimation.module.scss';
import styled, { keyframes } from "styled-components";


interface Props {
  globalData: Record<string, any>;
  logoUrlsString?: string;
}

export const ScrollAnimation = (props: Props) => {
  const { logoUrlsString } = props;
  const logoUrlArray = logoUrlsString?.split(',') || [];

  const logoWith = 160;
  const logoNumbers = logoUrlArray.length || 0;
  const singleSlideTrackWidth = logoWith * logoNumbers;
  const animationDuration = logoNumbers * 4;


  const spin = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-${singleSlideTrackWidth}px);}`;

  const ScrollDiv = styled.div`
    animation: ${animationDuration}s ${spin} linear infinite;
    width: ${singleSlideTrackWidth * 2}px;
  `;

  const Slide = (classname:string, imgSrc:string) => {
    return (
      <div className={classname}>
        <img 
          className={styles.logo} 
          src={`${imgSrc}`}
        />
      </div>
    )
  }

  return (
    <div className={styles.slider} >
      <ScrollDiv className={styles.slideTrack}>
        {logoUrlArray?.map(logo => Slide(styles.slide, logo))}
        {logoUrlArray?.map(logo => Slide(styles.slide1, logo))}
      </ScrollDiv>
    </div>
  );
};