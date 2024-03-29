import * as React from "react";
import { SVGProps } from "react";

const Intersect = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={29}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 24.207c2.115-.98 5.375-2.33 7.021-3.01l.812-.336c1.396-.584 1.955-2.196 1.955-2.196s.63.365.63-.66c0-.353-.075-.385-.2-.436-.235-.098-.647-.269-1.059-2.86 0 0-1.746-.514-1.397-4.763l.416-.142c-.35-.73-.698-4.176-.698-4.688 0-.512.698-2.561 1.118-3.001.417-.44 1.466-.514 1.466-.514 0-.51 1.396-1.463 3.075-1.537.735-.033.986-.08 1.232-.06.313.027.617.161 1.912.573 2.019.642 2.588 1.505 3.402 2.737.118.179.24.365.373.559 1.05 1.537 0 6.077 0 6.077h.42c.347 4.247-1.4 4.76-1.4 4.76-.412 2.591-.824 2.762-1.059 2.86-.124.052-.199.083-.199.437 0 1.024.63.66.63.66s.557 1.613 1.955 2.195c.199.084.525.219.94.39 1.683.697 4.835 2.002 6.898 2.957-2.205 2.182-5.011 3.85-8.179 4.79H15.9l-1.083-4.476.962-1.01-1.657-1.738-1.657 1.74.962 1.01L12.344 29h-4.16c-3.17-.939-5.978-2.61-8.184-4.793Z"
            fill="#fff"
        />
    </svg>
);

export default Intersect;
