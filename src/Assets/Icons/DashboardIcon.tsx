import React, { SVGProps } from "react";

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={15}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="inherit"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.667 13.333A1.667 1.667 0 0 0 8.333 15h5A1.667 1.667 0 0 0 15 13.333V10a1.668 1.668 0 0 0-1.667-1.667h-5A1.667 1.667 0 0 0 6.667 10v3.333Zm-3.334-5H1.667A1.667 1.667 0 0 0 0 10v3.333A1.667 1.667 0 0 0 1.667 15h1.666A1.668 1.668 0 0 0 5 13.333V10a1.667 1.667 0 0 0-1.667-1.667ZM15 1.667A1.667 1.667 0 0 0 13.333 0H1.667A1.666 1.666 0 0 0 0 1.667V5a1.667 1.667 0 0 0 1.667 1.667h11.666C14.254 6.667 15 5.92 15 5V1.667Z"
            fill="currentColor"
        />
    </svg>
);
