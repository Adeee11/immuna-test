import { styled, Typography, Box } from "@mui/material";
import { ArrowDown } from "Assets/Icons";

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
    background-color: ${({ theme }) => theme.colors.grey.primary2};
    overflow: hidden;
`;

const AccountInfoBox = styled(Box)`
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(2)};
    transition: all 0.3s linear;
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey.primary1};
    }
`;

export const AccountInfo = (props: IAccountInfo) => {
    return (
        <AccountInfoBox
            display="flex"
            alignItems={"center"}
            justifyContent="center"
        >
            <Box marginRight={1} display="flex" alignItems="center">
                {props.img ? <AccountImg src={props.img} /> : <PlaceHolder />}
            </Box>
            <Typography marginRight={1}>{props.name}</Typography>
            <ArrowDown />
        </AccountInfoBox>
    );
};
