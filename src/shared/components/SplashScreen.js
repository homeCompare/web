/* eslint-disable react/no-danger */
import React, {memo} from 'react';

import HomeCompareLogoImage from '@/shared/images/homeCompare.png';

/**
 * this component cant use styled-component nor redux as
 * its load for persist-store loading state.
 */

const SplashScreen = () => (
  <>
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
      
        50% {
          transform: scale(5);
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
      
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
      }

      .ss_root {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ss_logoImage {
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 50%;
        animation: pulse 5s infinite;
      }
    `}}
    />

    <div className="ss_root">
      <img className="ss_logoImage" src={HomeCompareLogoImage} alt="homeCompare.io" />
    </div>
  </>
);

export default memo(SplashScreen);
