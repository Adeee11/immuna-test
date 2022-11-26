import {
    IconButton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { CopyIcon, EthIconSmall } from "../../Assets/Icons";
import {
    DashboardContainer,
    EthBadge,
    PageSelect,
    Pagination,
    Search,
} from "../../Components";

export function Dashboard() {
    return (
        <>
            <DashboardContainer>
                <Box
                    display="flex"
                    paddingTop={2}
                    paddingBottom={2}
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Typography fontWeight="500" fontSize="18px" variant="h5">
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
                                style={{ fontSize: 24, transform: "scale(.6)" }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </DashboardContainer>
            <DashboardContainer justifyContent="space-between">
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
        </>
    );
}
