import { styled } from "@mui/material";

export const Input = styled("input")`
    border: 1px solid #efefef;
    border-radius: 46px;
    background-color: #efefef;
    color: #999999;
    width: 100%;
    display: block;
    font-size: 14px;
    padding: 24px 29px;
    transition: all 0.3s linear;
    &:focus,
    &:hover {
        outline: none;
        background-color: #fff;
    }
    &::placeholder {
        color: #999999;
    }
`;
