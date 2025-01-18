import React, { forwardRef } from 'react';
import {COLORS} from "@/components/EelLogo/constants";

export const EelHead = forwardRef<SVGCircleElement>((props, ref) => {
    return (
        <>
            <circle
                ref={ref}
                cx="350"
                cy="150"
                r="15"
                fill={COLORS.DEFAULT}
            />
            <circle
                cx="355"
                cy="145"
                r="4"
                fill={COLORS.WHITE}
            />
        </>
    );
});

EelHead.displayName = 'EelHead';