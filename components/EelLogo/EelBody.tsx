import React, { forwardRef } from 'react';
import { COLORS } from '@/components/EelLogo/constants';

export const EelBody = forwardRef<SVGPathElement>((props, ref) => {
  const PATH = 'M50 150 C 100 100, 150 200, 200 150 C 250 100, 300 200, 350 150';

  return (
    <>
      <defs>
        <filter
          id="eelGlow"
          x="-300%"
          y="-300%"
          width="700%"
          height="700%"
          primitiveUnits="userSpaceOnUse"
        >
          {/* First shadow - lighter, smaller spread */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur1" />
          <feFlood floodColor={COLORS.ELECTRIC_LIGHT} result="color1" />
          <feComposite operator="in" in="color1" in2="blur1" result="shadow1" />

          {/* Second shadow - darker, larger spread */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur2" />
          <feFlood floodColor={COLORS.ELECTRIC} result="color2" />
          <feComposite operator="in" in="color2" in2="blur2" result="shadow2" />

          {/* Combine everything */}
          <feMerge>
            <feMergeNode in="shadow1" />
            <feMergeNode in="shadow2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        ref={ref}
        d={PATH}
        fill="none"
        stroke={COLORS.DEFAULT}
        strokeWidth="40"
        strokeLinecap="round"
        filter="url(#eelGlow)"
      />
      <path d={PATH} fill="none" stroke={COLORS.WHITE} strokeWidth="4" strokeDasharray="20,20" />
    </>
  );
});

EelBody.displayName = 'EelBody';
