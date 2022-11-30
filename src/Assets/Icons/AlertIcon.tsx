import React, { SVGProps } from "react";

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={17}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="inherit"
            {...props}
        >
            <path
                d="M16.403 12.985 9.182 1.213c-.48-.785-1.267-.774-1.748.01L.214 12.98c-.481.785-.122 1.391.797 1.391h14.593c.92 0 1.28-.602.799-1.386ZM8.302 3.818c.462 0 .82.511.796 1.135l-.146 3.762C8.928 9.34 8.635 9.85 8.3 9.85s-.629-.51-.652-1.135l-.145-3.762c-.024-.624.335-1.135.799-1.135Zm0 8.867c-.584 0-.984-.427-.972-1.01 0-.596.401-1.01.972-1.01.594 0 .97.414.983 1.01 0 .583-.389 1.01-.983 1.01Z"
                fill="currentColor"
            />
        </svg>
    );
};
