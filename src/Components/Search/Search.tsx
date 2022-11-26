import { Box, styled } from "@mui/material";
import { SearchIcon } from "../../Assets/Icons";

const StyledSearch = styled("input")`
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    height: 40px ;
    background-color: #fff;
    color: #9b9b9b;
    width: 100%;
    display: block;
    font-size: 14px;
    font-weight: 400;
    min-width: 352px;
    padding: 12px 40px;
    transition: all 0.3s linear;
    &:focus,
    &:hover {
        outline: none;
    }
    &::placeholder {
        color: #9b9b9b;
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
`;

export function Search(
    props: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
) {
    return (
        <Box position="relative">
            <StyledSearchIcon /> <StyledSearch type="search" {...props} />
        </Box>
    );
}
