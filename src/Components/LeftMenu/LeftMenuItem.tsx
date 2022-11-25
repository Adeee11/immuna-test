import { Box } from "@mui/system";
import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { StyledLink } from "./LeftMenu";

export const LeftMenuItem = ({
    icon, location, text,
}: {
    icon: React.ReactElement;
    location: string;
    text: string;
}) => {
    const navigate = useNavigate();
    const matches = useMatch(location);
    return (
        <StyledLink
            href={location}
            isActive={!!matches}
            onClick={(e) => {
                e.preventDefault();
                navigate(location);
            }}
        >
            {icon}
            <Box component="span">{text}</Box>
        </StyledLink>
    );
};
