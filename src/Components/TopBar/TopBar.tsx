import { Box, css, IconButton, styled, Typography } from "@mui/material";
import { NotificationIcon } from "Assets/Icons";
import { AccountInfo } from "../AccountInfo";
import { Search } from "../Search";
import betty from "Assets/Images/betty.png";
import { DashboardContainer } from "../DashboardContainer";

const StyledNav = styled("nav")`
    ${({ theme }) => {
        return css`
            height: ${theme.navigation.height};
            position: fixed;
            left: ${theme.leftMenu.width};
            top: 0;
            width: calc(100vw - ${theme.leftMenu.width});
            box-shadow: 0px 1px 10px rgba(74, 74, 74, 0.07);
            background-color: ${theme.palette.common.white};
            display: flex;
            align-items: stretch;
            z-index: 0;
        `;
    }}
`;

export const TopBar = () => {
    return (
        <StyledNav>
            <DashboardContainer justifyContent="space-between">
                <Box display="flex">
                    <Box display="flex" alignItems="center">
                        <Typography
                            fontWeight="500"
                            fontSize="18px"
                            variant="h5"
                        >
                            Dashboard
                        </Typography>
                    </Box>
                    <Box paddingLeft="54px" display="flex" alignItems="center">
                        <Search placeholder="Search..." />
                    </Box>
                </Box>
                <Box display="flex">
                    <Box display="flex" alignItems="center" marginRight="5px">
                        <IconButton>
                            <NotificationIcon />
                        </IconButton>
                    </Box>

                    <AccountInfo img={betty} name="Betty Cooper" />
                </Box>
            </DashboardContainer>
        </StyledNav>
    );
};
