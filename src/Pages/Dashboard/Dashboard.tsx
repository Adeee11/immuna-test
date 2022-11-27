import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
    CopyIcon,
    EthIconSmall,
    ExternalIcon,
    PoolIcon,
} from "../../Assets/Icons";
import {
    Badge,
    DashboardContainer,
    EthBadge,
    PageSelect,
    Pagination,
    Search,
} from "../../Components";
import { Table } from "../../Components/Table";

const data = [
    ["Uniswap", "0x75f5...1666", "1.104008 WETH / 2,888.28 USDC", "Green"],
    ["Uniswap", "0x75f5...1666", "300 DAIDAI / 300 USDC", "Red"],
    ["Uniswap", "0x75f5...1666", "500 BUSD / 500 USDT", "Yellow"],
    ["Uniswap", "0x75f5...1666", "0.624822 WETH / 339,97585406 1INCH", "Green"],
    ["Uniswap", "0x75f5...1666", "100 DAIDAI / 0,03837881 WETH", "Green"],
] as const;

export function Dashboard() {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Box>
                <DashboardContainer>
                    <Box
                        display="flex"
                        paddingTop={2}
                        paddingBottom={2}
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Typography
                            fontWeight="500"
                            fontSize="18px"
                            variant="h5"
                        >
                            Immuna Monitor Portal
                        </Typography>
                        <Box display={"flex"} alignItems="center">
                            <Box marginRight={2}>
                                <Search placeholder="Search" />
                            </Box>
                            <Box marginRight={1.5}>
                                <EthBadge
                                    icon={<EthIconSmall />}
                                    network="ETH"
                                    address="0xBAD7...E116"
                                />
                            </Box>
                            <IconButton style={{ backgroundColor: "#CBE1FF" }}>
                                <CopyIcon
                                    style={{
                                        fontSize: 24,
                                        transform: "scale(.6)",
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                </DashboardContainer>
                <DashboardContainer justifyContent="space-between">
                    <Table
                        columns={[
                            { title: "Protocol", key: "protocol", size: "15%" },
                            { title: "Pool", key: "pool", size: "20%" },
                            { title: "Balance", key: "balance", size: "30%" },
                            { title: "Risk Status", key: "risk", size: "35%" },
                        ]}
                        data={data.map((item, index) => {
                            return {
                                key: index,
                                values: [
                                    <Box
                                        component="a"
                                        display="flex"
                                        target="_blank"
                                        href="https://uniswap.com"
                                        alignItems="center"
                                        fontSize="inherit"
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Box component="span" marginRight={1}>
                                            {item[0]}
                                        </Box>{" "}
                                        <ExternalIcon />
                                    </Box>,
                                    <Box
                                        component="a"
                                        display="flex"
                                        alignItems="center"
                                        fontSize="16px"
                                        target="_blank"
                                        href="https://bscscan.com"
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <PoolIcon />{" "}
                                        <Box
                                            marginLeft={"20px"}
                                            component="span"
                                            marginRight={"20px"}
                                        >
                                            {" "}
                                            {item[1]}
                                        </Box>{" "}
                                        <ExternalIcon />
                                    </Box>,
                                    <Typography fontSize="inherit">
                                        {item[2]}
                                    </Typography>,

                                    <Badge
                                        type={item[3].toLowerCase() as "green"}
                                    >
                                        {item[3]}
                                    </Badge>,
                                ],
                            };
                        })}
                    />
                </DashboardContainer>
            </Box>
            <Box>
                <DashboardContainer paddingBottom={2} justifyContent="space-between">
                    <Box display="flex" alignItems="center" marginRight={2}>
                        <Typography
                            display="flex"
                            alignItems="center"
                            fontSize="12px"
                        >
                            Show{" "}
                            <Box marginLeft={1} marginRight={1}>
                                <PageSelect />
                            </Box>
                            results of 50 entries
                        </Typography>
                    </Box>
                    <Box>
                        <Pagination
                            onChange={(pg) => {}}
                            totalPages={50}
                            currentPage={1}
                        />
                    </Box>
                </DashboardContainer>
            </Box>
        </Box>
    );
}
