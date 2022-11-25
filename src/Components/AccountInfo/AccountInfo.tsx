import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ArrowDown } from "../../Assets/Icons";

type IAccountInfo = {
    name: string;
    img?: string;
};

const AccountImg = styled("img")`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
`;

const PlaceHolder = styled("div")`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #d1d1d1;
    overflow: hidden;
`;

const AccountInfoBox = styled(Box)`
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(2)};
    transition: all 0.3s linear;
    &:hover {
        background-color: #efefef;
    }
`;

export const AccountInfo = (props: IAccountInfo) => {
    return (
        <AccountInfoBox
            display="flex"
            alignItems={"center"}
            justifyContent="center"
        >
            <Box marginRight={1}>
                {props.img ? <AccountImg src={props.img} /> : <PlaceHolder />}
            </Box>
            <Typography marginRight={1}>{props.name}</Typography>
            <ArrowDown />
        </AccountInfoBox>
    );
};
