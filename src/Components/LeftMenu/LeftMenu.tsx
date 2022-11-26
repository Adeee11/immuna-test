import { Box, css, styled } from "@mui/material";
import React from "react";
import { LogoMedium } from "../Logo";
import {
    AlertIcon,
    DashboardIcon,
    DefendIcon,
    ProtectIcon,
} from "../../Assets/Icons";
import { LeftMenuItem } from "./LeftMenuItem";

const LeftMenuWrapper = styled(Box)`
    padding: 30px 36px;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    z-index: 1;
    width: ${({ theme }) => theme.leftMenu.width};
    box-shadow: 0px 2px 10px rgba(132, 132, 132, 0.07);
`;

const Link = (
    props: React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > & { isActive?: boolean }
) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
};

export const StyledLink = styled(Link)`
    ${({ theme, isActive }) => {
        const DefaultStyles = `background-color: ${theme.palette.common.white};
      color: #4d4d4d;`;
        const ActiveStyles = ` background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.white};`;
        return css`
            text-decoration: none;
            display: block;
            padding: 15px 30px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            transition: all 0.3s linear;
            & span {
                margin-left: 10px;
            }
            ${isActive ? ActiveStyles : DefaultStyles}
            &:hover {
                ${ActiveStyles}
            }
        `;
    }}
`;

const LeftMenuList = styled(Box)`
    width: 100%;
    margin-top: 65px;
`;

export function LeftMenu() {
    return (
        <LeftMenuWrapper>
            <LogoMedium />
            <LeftMenuList>
                <LeftMenuItem
                    icon={<DashboardIcon />}
                    text="Dashboard"
                    location="/dashboard"
                />
                <LeftMenuItem
                    icon={<AlertIcon />}
                    text="Alerts"
                    location="/alerts"
                />
                <LeftMenuItem
                    icon={<DefendIcon />}
                    text="Defend"
                    location="/defend"
                />
                <LeftMenuItem
                    icon={<ProtectIcon />}
                    text="Protect"
                    location="/protect"
                />
            </LeftMenuList>
        </LeftMenuWrapper>
    );
}
