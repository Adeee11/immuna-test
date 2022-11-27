import { styled } from "@mui/material";
import { TableIcon } from "../../Assets/Icons";

const StyledTable = styled("table")`
    background: #ffffff;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    margin-bottom: 20px;
`;

const TH = styled("th")`
    font-weight: inherit;
    font-size: inherit;
    padding: 20px 24px;
    cursor: pointer;
    text-align: left;
`;

const TR = styled("tr")`
    font-weight: inherit;
    font-size: inherit;
    &:nth-child(even) {
        background-color: #f4f9ff;
    }
`;
const TD = styled("td")`
    padding: 20px 24px;
`;

export const Table = (props: {
    columns: {
        size?: number | string;
        key: string | number;
        title: React.ReactNode;
    }[];
    data: { values: React.ReactNode[]; key: string | number }[];
}) => {
    return (
        <StyledTable>
            <colgroup>
                {props.columns.map((item) => {
                    return <col key={item.key} width={item.size} />;
                })}
            </colgroup>
            <thead style={{ backgroundColor: "#E6F0FF" }}>
                <tr>
                    {props.columns.map((item) => {
                        return (
                            <TH key={item.key}>
                                {item.title}{" "}
                                <TableIcon
                                    style={{
                                        marginLeft: 10,
                                    }}
                                />{" "}
                            </TH>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data.map((row) => {
                    return (
                        <TR key={row.key}>
                            {row.values.map((item) => {
                                return <TD>{item}</TD>;
                            })}
                        </TR>
                    );
                })}
            </tbody>
        </StyledTable>
    );
};
