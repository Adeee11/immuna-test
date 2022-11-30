import { Box, css, styled } from "@mui/material";
import React from "react";

const BadgeOuter = styled("div")`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue.primary10};
        color: ${theme.colors.grey.primary7};
    `}
    padding: 0 24px;
    padding-right: 0;
    height: 40px;
    font-size: 14px;
    border-radius: 20px;
    display: flex;
    position: relative;
    text-transform: uppercase;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
        opacity: 0.9;
    }
`;

const BadgeInner = styled(Box)`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue.primary9};
        color: ${theme.colors.grey.primary6};
    `}

    padding: 0 24px;
    padding-right: 30px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    text-transform: uppercase;
    align-items: center;
`;

export const EthBadge = (props: {
    icon: React.ReactElement;
    address: string;
    network: string;
}) => {
    return (
        <BadgeOuter>
            <Box
                component="span"
                display="flex"
                alignItems="center"
                marginRight={1}
            >
                {props.icon}
            </Box>
            {props.network}
            <BadgeInner marginLeft={2}>{props.address}</BadgeInner>
        </BadgeOuter>
    );
};
