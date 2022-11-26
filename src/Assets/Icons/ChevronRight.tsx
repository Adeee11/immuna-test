import { SvgIcon, SvgIconProps } from "@mui/material";

export const ChevronRight = (props: SvgIconProps) => {
    return (
        <SvgIcon viewBox="0 0 7 11" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 10.617A.999.999 0 0 1 .793 8.91l3.305-3.305-3.18-3.293a1 1 0 0 1 1.44-1.39l3.861 4a1 1 0 0 1-.012 1.402l-4 4a.997.997 0 0 1-.707.293Z"
            />
        </SvgIcon>
    );
};
