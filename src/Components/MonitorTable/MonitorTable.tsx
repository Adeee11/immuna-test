import { PoolIcon } from "Assets/Icons";
import { Badge, Table } from "Components";
import { ContractLink, ProtocolName, TokenPrice } from "./Components";

type IMonitorTableProps = {
    data: { name: string; contract: string; color: string }[];
};

export function MonitorTable(props: IMonitorTableProps) {
    return (
        <Table
            columns={[
                { title: "Protocol", key: "protocol", size: "20%" },
                { title: "Pool", key: "pool", size: "30%" },
                { title: "Balance", key: "balance", size: "20%" },
                { title: "Risk Status", key: "risk", size: "30%" },
            ]}
            data={props.data.map((item, index) => {
                return {
                    key: index,
                    values: [
                        <ProtocolName
                            name={item.name}
                            url={`https://bscscan.com/token/${item.contract}`}
                        />,
                        <ContractLink
                            icon={<PoolIcon />}
                            address={item.contract}
                        />,
                        <TokenPrice address={item.contract} />,
                        <Badge type={item.color.toLowerCase() as "green"}>
                            {item.color}
                        </Badge>,
                    ],
                };
            })}
        />
    );
}
