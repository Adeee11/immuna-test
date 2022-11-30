import { Grid } from "@mui/material";
import { styled, css } from "@mui/material";

import BitCoinBg from "Assets/Images/bitcoin_bg.png";
import { LoginForm } from "Components";

const BitcoinImg = styled("img")`
    object-fit: cover;
    object-position: 0 -200px;
    display: block;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

const LoginContainer = styled(Grid)`
    ${({ theme }) => css`
        height: calc(100vh - ${theme.navigation.height});
        background-color: ${theme.colors.grey.primary13};
    `}
`;

const Overlay = styled("div")`
    position: absolute;
    background: rgba(196, 196, 196, 0.2);
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export function Login() {
    return (
        <div>
            <LoginContainer container>
                <Grid item position={"relative"} height="100%" xs={12} md={6}>
                    <BitcoinImg src={BitCoinBg} />
                    <Overlay />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    position="relative"
                    justifyContent="center"
                    paddingLeft={4}
                    paddingRight={4}
                >
                    <LoginForm />
                </Grid>
            </LoginContainer>
        </div>
    );
}
