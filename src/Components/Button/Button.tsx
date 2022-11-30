import { css, styled, Theme } from "@mui/material";

type HTMLButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type ExtendedButtonProps = {
    color?: "primary" | "secondary";
    inline?: boolean;
    size?: "lg" | "md";
};

export const Button = styled("button")`
    ${({
        theme,
        color = "primary",
        inline = false,
        size = "lg",
    }: { theme: Theme } & ExtendedButtonProps & HTMLButtonProps) => {
        return css`
            font-weight: 500;
            font-size: 18px;
            ${color === "primary" &&
            css`
                color: ${theme.palette.common.white};
                background-color: ${theme.palette.primary.main};
            `}
            ${color === "secondary" &&
            css`
                color: ${theme.palette.common.white};
                background-color: ${theme.colors.grey.primary1};
            `}
            


            /* box-shadow:  none; */
            ${size === "lg" &&
            css`
                padding: 22px 75px;
            `}
            ${size === "md" &&
            css`
                padding: 14px 75px;
            `}
            ${!inline &&
            css`
                width: 100%;
            `}
            border-radius: 46px;
            cursor: pointer;
            border: 0px;
            transition: all 0.3s linear;
            &:hover {
                opacity: 0.9;
            }
        `;
    }}
`;
