import { css, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LeftMenu } from "../LeftMenu";
import { TopBar } from "../TopBar";

const DashboardWrapper = styled("section")`
    background-color: #f8f8f8;
    height: 100vh;
    width: 100vw;
`;

const DashboardMain = styled("main")`
    position: relative;
    ${({ theme }) => {
        return css`
            width: calc(100vw - ${theme.leftMenu.width});
            left: ${theme.leftMenu.width};
            top: ${theme.navigation.height};
            height: calc(100vh - ${theme.navigation.height});
        `;
    }}
`;

export function DashboardLayout() {
    return (
        <DashboardWrapper>
            <LeftMenu />
            <TopBar />
            <DashboardMain>
                <Outlet />
            </DashboardMain>
        </DashboardWrapper>
    );
}
