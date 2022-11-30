import { css, Paper, styled } from "@mui/material";

export const ImmunaPaper = styled(Paper)`
    ${({ theme }) => css`
        background: ${theme.palette.common.white};
        position: relative;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
        border-radius: ${theme.spacing(1)};
        z-index: 1;
        width: 100%;
        max-width: 600px;
        padding: ${theme.spacing(7)} ${theme.spacing(6)};
    `}
`;
