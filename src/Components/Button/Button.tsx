import { css, styled } from "@mui/material";

export const Button = styled("button")`
    ${({ theme }) => {
        return css`
            font-weight: 500;
            font-size: 18px;
            color: ${theme.palette.common.white};
            background-color: ${theme.palette.primary.main};

            /* box-shadow:  none; */
            padding: 22px 0;
            width: 100%;
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
