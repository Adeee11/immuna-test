import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    SvgIcon,
    SvgIconProps,
    Typography,
} from "@mui/material";
import { Badge } from "../Badge";

interface IRiskModalProps {
    open: boolean;
    handleClose: () => void;
}
const CloseIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0c6.654 0 12 5.376 12 12 0 6.654-5.346 12-12 12-6.623 0-12-5.346-12-12C0 5.377 5.376 0 12 0Zm4.99 5.97L12 10.93 7.04 5.97c-.713-.713-1.782.356-1.07 1.07L10.93 12l-4.96 4.99c-.712.713.357 1.752 1.07 1.07L12 13.068l4.99 4.99c.713.683 1.753-.356 1.07-1.07L13.07 12l4.99-4.96c.683-.712-.387-1.782-1.07-1.069Z"
            />
        </SvgIcon>
    );
};
export const RiskModal = (props: IRiskModalProps) => {
    return (
        <Dialog
            maxWidth="lg"
            PaperProps={{ style: { width: 960 } }}
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle style={{ padding: "20px 32px" }} fontSize={"16px"}>
                Status
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    disableRipple
                    sx={{
                        position: "absolute",
                        right: 20,
                        top: 12,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent style={{ padding: 0 }} dividers={true}>
                <DialogContentText
                    paddingX={"39px"}
                    paddingTop={"20px"}
                    paddingBottom={"36px"}
                    tabIndex={-1}
                >
                    <Box display="flex" alignItems="center">
                        <Typography
                            marginRight="16px"
                            fontSize="18px"
                            color="#272727"
                        >
                            Risk Status{" "}
                        </Typography>{" "}
                        <Badge disableClick type="red">
                            Red
                        </Badge>
                    </Box>
                    <Box
                        display="flex"
                        marginTop="20px"
                        style={{ backgroundColor: "#F5F5F5" }}
                        borderRadius="8px"
                        padding={"16px"}
                        flexDirection="column"
                    >
                        <Box
                            display="flex"
                            sx={(theme) => ({
                                flexDirection: "row",
                                [theme.breakpoints.down("md")]: {
                                    flexDirection: "column",
                                },
                            })}
                        >
                            <Box flex={1}>
                                <Typography
                                    fontSize="14px"
                                    color="#5C5C5C"
                                    marginBottom="10px"
                                >
                                    Trigger:
                                </Typography>
                                <Typography
                                    marginBottom="30px"
                                    fontSize="14px"
                                    color="#2F2F2F"
                                >
                                    The asset's risk profile has changed
                                    significantly.
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography
                                    fontSize="14px"
                                    color="#5C5C5C"
                                    marginBottom="10px"
                                >
                                    Event Summary:
                                </Typography>
                                <Typography
                                    marginBottom="30px"
                                    fontSize="14px"
                                    color="#2F2F2F"
                                >
                                    A significant amount of Compound were
                                    transferred.
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                fontSize="14px"
                                color="#5C5C5C"
                                marginBottom="10px"
                            >
                                Details:
                            </Typography>
                            <Typography
                                marginBottom="30px"
                                fontSize="14px"
                                color="#2F2F2F"
                            >
                                [Token % out of the entire circulation] 0.58%
                                were transferred. A significant movement is
                                detected when there are more than 1% of the
                                tokens in circulation that were moved in a
                                single transaction. Such a significant movement
                                usually triggers movements in the asset's price
                                and therefor should be monitored closely.
                            </Typography>
                        </Box>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
