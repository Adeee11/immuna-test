import { css, IconButton as MuiIconButton, styled } from "@mui/material";

export const IconButton = styled(MuiIconButton)`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue.primary9};
        &:hover {
            background-color: ${theme.colors.blue.primary9};
        }
    `}
`;
