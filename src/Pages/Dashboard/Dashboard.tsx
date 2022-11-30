import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CopyIcon, EthIconSmall } from "Assets/Icons";
import {
    DashboardContainer,
    EthBadge,
    MonitorTable,
    PageSelect,
    Pagination,
    Search,
    IconButton,
} from "Components";

const data = [
    {
        name: "Pancakeswap",
        contract: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        color: "Green",
    },
    {
        name: "Uniswap",
        contract: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
        color: "Red",
    },
    {
        name: "BUSD",
        contract: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        color: "Yellow",
    },
    {
        name: "Aave",
        contract: "0xfb6115445bff7b52feb98650c87f44907e58f802",
        color: "Green",
    },
    {
        name: "Uniswap",
        contract: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
        color: "Green",
    },
];

export function Dashboard() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
        >
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
                            <IconButton>
                                <CopyIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </DashboardContainer>
                <DashboardContainer justifyContent="space-between">
                    <MonitorTable data={data} />
                </DashboardContainer>
            </Box>
            <Box>
                <DashboardContainer
                    paddingBottom={2}
                    justifyContent="space-between"
                >
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
