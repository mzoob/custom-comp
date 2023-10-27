import styles from './scrollAnimation.module.scss';
import styled, { keyframes } from "styled-components";


const logos = [
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/9737e91d033830451ee3ca497f7085dc/project/2000000000202504/images/AIxAl6-KTZSmDwWvtxmzAg==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/3b3c1ecbe1142a8024fde695ace9fee9/project/2000000000202504/images/8hVkiBuVwtZetQZVFbNf1Q==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/1f5eb5e28c167094ac79343b096dac5b/project/2000000000202504/images/QJhxjEKgGVDk83ZoWrP9Tw==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/38862eba6e12c06faa38cab585ac55c5/project/2000000000202504/images/tC1EuWkHfO-UJmFDeFy3cg==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/41f5898c49a2209f16234b09e9f5b6fc/project/2000000000202504/images/KiwyJmX69Ij4t67zyCO6yg==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/d74ce8974b9109201aebb45d4d3390fd/project/2000000000202504/images/gUcQp5aF_Kp1r6qjRuUy2A==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/0573cae9109ce1ca73c0598e4afe3c31/project/2000000000202504/images/Zewns1CUfH_On7ybN9nmuQ==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/2dd9466aa51acf1dcfb4fdc095eefd5c/project/2000000000202504/images/w5tA3YjO_kHL0IbEcDnlPQ==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/76677b752ac47115c0008d802e5fbb03/project/2000000000202504/images/LBtftC8XiKZ_wpD7rM9n3g==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/13a2d860e254c01854d404b96f143c8d/project/2000000000202504/images/C9A4LM0KTURAvYWATgm7hA==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/ea42228f77cf1a4eeeb7ff7f6597ce08/project/2000000000202504/images/kaj8_rOkXrT4DzLv-Qyz2g==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/8a57fa5e8647ea6c21a3039ce4755445/project/2000000000202504/images/yIOOaXgPBDjSGGD1M6PHuQ==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/9dc5a756f64c882725d62ebc371657bc/project/2000000000202504/images/neccqRCmHQxtv8spWryqNA==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/1f5590da12f101a172907e0d314ebc49/project/2000000000202504/images/yOwqhtaC5JUYhKOCz5zm8Q==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/57470b4e98acb2cd5e8bb00a07bac668/project/2000000000202504/images/YOeYEviIhismqE4JJh-v-Q==.webp"
    }
  },
  {
    "image": {
      "url": "https://fz-zion-static.functorz.com/202310281138/c1d37f9a22cb01414fa17622cdcbd746/project/2000000000202504/images/d8_7Syey2ew_uGU89eXPsw==.webp"
    }
  }
]

const fakeLogos = logos.map(item => item.image.url).join(",");

interface Props {
  globalData: Record<string, any>;
  logoUrlsString?: string;
}

export const ScrollAnimation = (props: Props) => {
  const { logoUrlsString } = props;
  console.log('sssssss');
  console.log(logoUrlsString);

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
      <div>fffff</div>
      <ScrollDiv className={styles.slideTrack}>
        {logoUrlArray?.map(logo => Slide(styles.slide, logo))}
        {logoUrlArray?.map(logo => Slide(styles.slide1, logo))}
      </ScrollDiv>
    </div>
  );
};