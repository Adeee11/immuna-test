import { SvgIcon, SvgIconProps } from "@mui/material";

export const CloseIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0c6.654 0 12 5.376 12 12 0 6.654-5.346 12-12 12-6.623 0-12-5.346-12-12C0 5.377 5.376 0 12 0Zm4.99 5.97L12 10.93 7.04 5.97c-.713-.713-1.782.356-1.07 1.07L10.93 12l-4.96 4.99c-.712.713.357 1.752 1.07 1.07L12 13.068l4.99 4.99c.713.683 1.753-.356 1.07-1.07L13.07 12l4.99-4.96c.683-.712-.387-1.782-1.07-1.069Z"
            />
        </SvgIcon>
    );
};
