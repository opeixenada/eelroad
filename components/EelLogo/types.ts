// Element references used in animations
export interface EelRefs {
  wholeEelEl: SVGGElement;
  bodyEl: SVGPathElement;
  headEl: SVGCircleElement;
}

// Animation configuration
export interface AnimationConfig {
  mainDuration: number;
  repeatDelay: number;
}
