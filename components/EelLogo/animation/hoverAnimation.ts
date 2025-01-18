import gsap from 'gsap';
import {COLORS} from '../constants';
import type {EelRefs, AnimationConfig} from '../types';
import {Observer} from 'gsap/Observer';

export const createHoverTimeline = (
    {bodyEl, headEl}: EelRefs,
    electricTl: gsap.core.Timeline,
    config: AnimationConfig
) => {
    const hoverTl = gsap.timeline({paused: true});

    hoverTl
        .to(bodyEl, {
            stroke: COLORS.ELECTRIC,
            duration: config.mainDuration,
            onStart: function () {
                electricTl.play();
            },
        })
        .to(headEl, {
            fill: COLORS.ELECTRIC,
            duration: config.mainDuration,
        }, "<");

    return hoverTl;
};

export const setupHoverObserver = (
    refs: EelRefs,
    hoverTl: gsap.core.Timeline,
    electricTl: gsap.core.Timeline,
    config: AnimationConfig
) => {
    return Observer.create({
        target: refs.wholeEelEl,
        type: 'pointer',
        onHover: () => {
            hoverTl.play();
        },
        onHoverEnd: () => {
            hoverTl.reverse();
            gsap.to(refs.bodyEl, {
                filter: 'none',
                duration: config.mainDuration,
                ease: 'power2.inOut',
                onStart: () => {
                    electricTl.pause(0);
                }
            });
        }
    });
};