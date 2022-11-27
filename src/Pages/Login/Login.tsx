import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled, css } from "@mui/material";
import React from "react";
import { Ethereum } from "../../Assets/Icons";
import BitCoinBg from "../../Assets/Images/bitcoin_bg.png";
import { Button } from "../../Components";
import { Input } from "../../Components/Input";
import Ellipse1img from "../../Assets/Images/ellipse1.png";
import Ellipse2img from "../../Assets/Images/ellipse2.png";
import { useNavigate } from "react-router-dom";
const BitcoinImg = styled("img")`
    object-fit: cover;
    object-position: 0 -200px ;
    display: block;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

const LoginContainer = styled(Grid)`
    ${({ theme }) => css`
        height: calc(100vh - ${theme.navigation.height});
        background-color: #f7fbff;
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

const StyledEllipse1 = styled("img")`
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
`;

const StyledEllipse2 = styled("img")`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
`;

const ImunaPaper = styled(Paper)`
    ${({ theme }) => css`
        background: ${theme.palette.common.white};
        position: relative;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
        border-radius: ${theme.spacing(1)};
        z-index: 1;
        padding: ${theme.spacing(7)} ${theme.spacing(6)};
    `}
`;

export function Login() {
    const navigate = useNavigate();

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
                    <StyledEllipse1 src={Ellipse1img} />
                    <StyledEllipse2 src={Ellipse2img} />
                    <ImunaPaper style={{ width: "100%", maxWidth: 600 }}>
                        <Typography
                            textAlign="center"
                            variant="h5"
                            fontWeight="500"
                            fontSize="30px"
                            color="#3D3D3D"
                        >
                            Welcome to Immuna!
                        </Typography>
                        <Typography textAlign="center" color="#2C2C2C">
                            Connect your wallet
                        </Typography>
                        <Typography
                            display="flex"
                            alignItems="center"
                            marginTop={8}
                            marginBottom={2}
                        >
                            <Box
                                component="span"
                                display="flex"
                                alignItems="center"
                                marginRight={1}
                            >
                                <Ethereum />
                            </Box>{" "}
                            Ethereum
                        </Typography>
                        <Input placeholder="Enter wallet address " />
                        <Box marginTop={7} marginBottom={20}>
                            <Button onClick={() => navigate("/dashboard")}>
                                Connect to Wallet
                            </Button>
                        </Box>
                    </ImunaPaper>
                </Grid>
            </LoginContainer>
        </div>
    );
}
