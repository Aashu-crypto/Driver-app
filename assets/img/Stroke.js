// CustomSVG.js

import React from 'react';
import Svg, { Path } from 'react-native-svg';

// Reusable SVG component
const Stroke = ({ width = 1, height = 10, color = '#12C524' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 1 10" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.66667V0H1V1.66667H0ZM0 4.44444V2.77778H1V4.44444H0ZM0 7.22222V5.55556H1V7.22222H0ZM0 10V8.33333H1V10H0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Stroke;
