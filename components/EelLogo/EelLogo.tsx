'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { EelBody } from './EelBody';
import { EelHead } from './EelHead';
import type { EelRefs } from './types';

gsap.registerPlugin(Observer);

export const EelLogo = () => {
  const wholeEel = useRef<SVGGElement>(null);
  const eelBody = useRef<SVGPathElement>(null);
  const eelHead = useRef<SVGCircleElement>(null);

  useLayoutEffect(() => {
    const refs: EelRefs = {
      wholeEelEl: wholeEel.current!,
      bodyEl: eelBody.current!,
      headEl: eelHead.current!,
    };

    if (!refs.wholeEelEl || !refs.bodyEl || !refs.headEl) return;
  }, []);

  return (
    <svg
      className="w-[90vw] h-[90vh] overflow-visible"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" />
      <g ref={wholeEel}>
        <EelBody ref={eelBody} />
        <EelHead ref={eelHead} />
      </g>
    </svg>
  );
};
