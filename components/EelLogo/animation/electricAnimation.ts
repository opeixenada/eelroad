import gsap from 'gsap';
import {COLORS} from '../constants';
import type {AnimationConfig} from '../types';

const getElectricFilter = (lightSpread: number, darkSpread: number): string => {
    return `drop-shadow(0 0 ${lightSpread}px ${COLORS.ELECTRIC_LIGHT}) drop-shadow(0 0 ${darkSpread}px ${COLORS.ELECTRIC})`;
};

export const createElectricTimeline = (bodyEl: SVGPathElement, config: AnimationConfig) => {
    const electricTl = gsap.timeline({
        repeat: -1,
        repeatDelay: config.repeatDelay,
        paused: true,
    });

    electricTl
        .set(bodyEl, {
            filter: 'none'
        })
        .to(bodyEl, {
            duration: 0.1,
            filter: getElectricFilter(18, 28),
            ease: 'power1.in'
        })
        .to(bodyEl, {
            duration: 0.12,
            filter: getElectricFilter(25, 40),
            ease: 'power2.in'
        }, "-=0.05")
        .to(bodyEl, {
            duration: 0.06,
            filter: getElectricFilter(5, 10),
            ease: 'power2.out'
        })
        .to(bodyEl, {
            duration: 0.05,
            filter: getElectricFilter(16, 32),
            ease: 'none'
        }, "+=0.02")
        .to(bodyEl, {
            duration: 0.04,
            filter: getElectricFilter(22, 36),
            ease: 'none'
        }, "-=0.02")
        .to(bodyEl, {
            duration: 0.08,
            filter: getElectricFilter(4, 8),
            ease: 'power1.out'
        })
        .set(bodyEl, {
            filter: 'none'
        });

    return electricTl;
};