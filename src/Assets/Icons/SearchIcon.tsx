import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={15}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m14.148 13.66-3.91-3.91a5.706 5.706 0 1 0-.732.732l3.91 3.91.732-.732ZM1.203 6.107a4.66 4.66 0 1 1 9.32 0 4.66 4.66 0 0 1-9.32 0Z"
                fill="#6A6A6A"
            />
        </svg>
    );
};
