import { FormControl, InputBase, NativeSelect, styled } from "@mui/material";

const StyledSelect = styled(InputBase)`
    background: #ffffff;
    border: 1px solid #e0e7ed;
    border-radius: 8px;
    font-size: 12px;
    padding: 5px 10px;
    & select.MuiInputBase-input {
        padding-right: 10px !important;
        &:focus {
            background-color: #fff ;
        }
    }
`;

export const PageSelect = () => {
    return (
        <FormControl variant="standard">
            <NativeSelect
                id="demo-customized-select-native"
                onChange={() => {}}
                input={<StyledSelect />}
            >
                {[10, 20, 30, 50].map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </NativeSelect>
        </FormControl>
    );
};
