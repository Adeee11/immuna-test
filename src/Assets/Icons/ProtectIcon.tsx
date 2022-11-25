import React, { SVGProps } from "react";

export const ProtectIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={15}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="inherit"
            {...props}
        >
            <path
                d="M14.984 3.392C12.54 3.392 9.286 2.736 7.5 0 5.714 2.736 2.46 3.392.016 3.392c0 0-.722 10.982 7.484 13.608 8.206-2.626 7.484-13.608 7.484-13.608ZM12.388 6.36l-5.262 4.834a.386.386 0 0 1-.518.005l-3.055-2.71a.374.374 0 0 1-.028-.534.388.388 0 0 1 .541-.027l2.794 2.478 5.004-4.599a.388.388 0 0 1 .542.019.374.374 0 0 1-.018.534Z"
                fill="currentColor" />
        </svg>
    );
};
