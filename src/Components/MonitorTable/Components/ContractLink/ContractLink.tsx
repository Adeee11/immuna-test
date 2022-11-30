import { Box, styled } from "@mui/material";
import React from "react";
import { ExternalIcon } from "Assets/Icons";
import { shortenAddress } from "Helpers";

const StyledLink = styled(Box)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
` as typeof Box;

export const ContractLink = ({
    address,
    icon,
}: {
    address: string;
    icon: React.ReactElement;
}) => {
    return (
        <StyledLink
            component="a"
            display="flex"
            alignItems="center"
            fontSize="16px"
            target="_blank"
            href={`https://bscscan.com/token/${address}`}
        >
            {icon}
            <Box marginLeft={2} component="span" marginRight={2}>
                {shortenAddress(address)}
            </Box>
            <ExternalIcon />
        </StyledLink>
    );
};
