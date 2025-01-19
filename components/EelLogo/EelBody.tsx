import React, { forwardRef } from 'react';
import { COLORS } from '@/components/EelLogo/constants';

export const EelBody = forwardRef<SVGPathElement>((props, ref) => {
  const PATH = 'M50 150 C 100 100, 150 200, 200 150 C 250 100, 300 200, 350 150';

  return (
    <>
      <path
        ref={ref}
        d={PATH}
        fill="none"
        stroke={COLORS.DEFAULT}
        strokeWidth="40"
        strokeLinecap="round"
      />
      <path d={PATH} fill="none" stroke={COLORS.WHITE} strokeWidth="4" strokeDasharray="20,20" />
    </>
  );
});

EelBody.displayName = 'EelBody';
