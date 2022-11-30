import { Box, css, styled } from "@mui/material";
import React, { useState } from "react";
import { RiskModal } from "../RiskModal";

interface IBadgeProps {
    type: "green" | "yellow" | "red";
    disableClick?: boolean;
}

const StyleMap = {
    green: css`
        background: rgba(179, 212, 174, 0.5);
        color: #18a002;
    `,
    yellow: css`
        background: rgba(248, 255, 168, 0.5);
        color: #c7b40e;
    `,
    red: css`
        background: rgba(202, 13, 13, 0.2);
        color: #c92a2a;
    `,
} as const;

const BadgeComp = styled(Box)`
    ${({ type, disableClick }: IBadgeProps) => {
        return css`
            border-radius: 30px;
            width: 100px;
            text-align: center;
            padding: 9px;
            ${disableClick
                ? css`
                      cursor: default;
                  `
                : css`
                      cursor: pointer;
                  `}
            ${StyleMap[type]}
        `;
    }}
`;

export const Badge = (props: React.ComponentProps<typeof BadgeComp>) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <BadgeComp
                onClick={props.disableClick ? () => {} : () => setIsOpen(true)}
                {...props}
            />
            <RiskModal open={isOpen} handleClose={() => setIsOpen(false)} />
        </>
    );
};
