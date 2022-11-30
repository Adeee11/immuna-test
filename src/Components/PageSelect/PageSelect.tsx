import {
    css,
    FormControl,
    InputBase,
    NativeSelect,
    styled,
} from "@mui/material";

const StyledSelect = styled(InputBase)`
    ${({ theme }) => {
        return css`
            background: ${theme.palette.common.white};
            border: 1px solid ${theme.colors.grey.primary11};
            border-radius: 8px;
            font-size: 12px;
            padding: 5px 10px;
            & select.MuiInputBase-input {
                padding-right: 10px !important;
                &:focus {
                    background: ${theme.palette.common.white};
                }
            }
        `;
    }}
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
