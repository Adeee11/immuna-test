import { Box, styled } from "@mui/material";
import React from "react";

const DashboardWrapper = styled(Box)`
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`;

const DashboardRow = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
`;

export const DashboardContainer = (props: React.ComponentProps<typeof Box>) => {
    return (
        <DashboardWrapper>
            <DashboardRow {...props} />
        </DashboardWrapper>
    );
};
