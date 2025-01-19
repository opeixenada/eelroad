import gsap from 'gsap';
import {COLORS} from '../constants';
import type {EelRefs, AnimationConfig} from '../types';
import {Observer} from 'gsap/Observer';

export const createEelTimeline = (
    {bodyEl, headEl}: EelRefs,
    electricTl: gsap.core.Timeline,
    config: AnimationConfig
) => {
    const eelTl = gsap.timeline({paused: true});

    eelTl
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

    return eelTl;
};

export const setupEelObserver = (
    refs: EelRefs,
    eelTl: gsap.core.Timeline,
    electricTl: gsap.core.Timeline,
    config: AnimationConfig,
) => {
    return Observer.create({
        target: refs.wholeEelEl,
        type: 'pointer',
        onClick: () => {
            // For mobile/touch devices
            if (window.matchMedia('(hover: none)').matches) {
                if (eelTl.isActive() || eelTl.progress() > 0) {
                    // If animation is playing or has progress, stop it
                    eelTl.reverse();
                    gsap.to(refs.bodyEl, {
                        filter: 'none',
                        duration: config.mainDuration,
                        ease: 'power2.inOut',
                        onStart: () => {
                            electricTl.pause(0);
                        }
                    });
                } else {
                    // Start animation on first click
                    eelTl.play();
                }
            }
        },
        // Keep hover functionality for desktop
        onHover: () => {
            if (window.matchMedia('(hover: hover)').matches) {
                eelTl.play();
            }
        },
        onHoverEnd: () => {
            if (window.matchMedia('(hover: hover)').matches) {
                eelTl.reverse();
                gsap.to(refs.bodyEl, {
                    filter: 'none',
                    duration: config.mainDuration,
                    ease: 'power2.inOut',
                    onStart: () => {
                        electricTl.pause(0);
                    }
                });
            }
        }
    });
};