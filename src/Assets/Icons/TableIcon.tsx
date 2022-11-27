import { SVGProps } from "react";

export const TableIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={8}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.54 4.474h5.964c.445 0 .682-.537.386-.877L3.908.177A.516.516 0 0 0 3.522 0a.507.507 0 0 0-.386.177L.153 3.597c-.296.34-.06.877.386.877Zm2.596 5.349A.516.516 0 0 0 3.52 10a.507.507 0 0 0 .386-.177l2.983-3.42c.296-.34.06-.876-.386-.876H.539c-.445 0-.682.537-.386.877l2.983 3.419Z"
                fill="#2C2C2C"
            />
        </svg>
    );
};
