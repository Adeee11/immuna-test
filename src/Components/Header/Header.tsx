import { Box, Grid } from "@mui/material";
import { styled, css } from "@mui/material";
import { AccountInfo } from "../AccountInfo";
import { Logo } from "../Logo";

const StyledHeader = styled("nav")`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.common.white};
            height: ${theme.navigation.height};
            box-shadow: 0px 1px 10px rgba(132, 132, 132, 0.07);
        `;
    }};
`;

export function Header() {
    return (
        <StyledHeader>
            <Box display="flex" justifyContent="center">
                <Grid
                    container
                    maxWidth="1440px"
                    alignItems="stretch"
                    height={"100%"}
                    columnSpacing={2}
                >
                    <Grid display={"flex"} item alignItems="center" xs={8}>
                        <Logo />
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        justifyContent="flex-end"
                        xs={4}
                    >
                        <AccountInfo name="N/A" />
                    </Grid>
                </Grid>
            </Box>
        </StyledHeader>
    );
}
