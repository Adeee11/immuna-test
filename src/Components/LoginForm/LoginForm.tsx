import { Button, Input } from "Components";
import Ellipse1img from "Assets/Images/ellipse1.png";
import Ellipse2img from "Assets/Images/ellipse2.png";
import { Box, styled, Typography } from "@mui/material";
import { ImmunaPaper } from "Components/ImmunaPaper";
import { Ethereum } from "Assets/Icons";

import { useNavigate } from "react-router-dom";
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

export const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <StyledEllipse1 src={Ellipse1img} />
            <StyledEllipse2 src={Ellipse2img} />
            <ImmunaPaper>
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
            </ImmunaPaper>
        </>
    );
};
