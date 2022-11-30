import { css, styled } from "@mui/material";

export const Input = styled("input")`
    ${({ theme }) => {
        return css`
            border: 1px solid ${theme.colors.blue.primary11};
            border-radius: 46px;
            background-color: ${theme.colors.blue.primary11};
            color: ${theme.colors.grey.primary8};
            width: 100%;
            display: block;
            font-size: 14px;
            padding: 24px 29px;
            transition: all 0.3s linear;
            &:focus,
            &:hover {
                outline: none;
                background-color: ${theme.palette.common.white};
            }
            &::placeholder {
                color: ${theme.colors.grey.primary8};
            }
        `;
    }}
`;
