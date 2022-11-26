import { SvgIcon, SvgIconProps } from "@mui/material";

export const ChevronLeft = (props: SvgIconProps) => {
    return (
        <SvgIcon
            viewBox="0 0 7 11"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.362 10.617a.996.996 0 0 1-.719-.305l-3.863-4A1 1 0 0 1 .793 4.91l4-4a.999.999 0 1 1 1.414 1.414L2.902 5.63l3.179 3.293a1 1 0 0 1-.719 1.695Z"
            />
        </SvgIcon>
    );
};
