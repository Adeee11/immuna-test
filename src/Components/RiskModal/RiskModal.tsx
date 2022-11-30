import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    styled,
} from "@mui/material";
import { CloseIcon } from "Assets/Icons";
import { Button } from "Components/Button";
import { Text } from "Components/Text";
import { Badge } from "../Badge";
import { DataInfo } from "./DataInfo";

interface IRiskModalProps {
    open: boolean;
    handleClose: () => void;
}

const StyledDialogTitle = styled(DialogTitle)`
    padding: 20px 32px;
    font-size: 16px;
`;

const DialogClose = styled(IconButton)`
    position: absolute;
    right: 20px;
    top: 12px;
    color: ${({ theme }) => theme.palette.grey[500]};
`;

const DialogContentWrapper = styled(Box)`
    background-color: ${({ theme }) => theme.colors.grey.primary1};
    border-radius: 8px;
    margin-top: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const RiskModal = (props: IRiskModalProps) => {
    return (
        <Dialog
            maxWidth="lg"
            PaperProps={{ style: { width: 960 } }}
            open={props.open}
            onClose={props.handleClose}
        >
            <StyledDialogTitle>
                Status
                <DialogClose
                    aria-label="close"
                    onClick={props.handleClose}
                    disableRipple
                >
                    <CloseIcon />
                </DialogClose>
            </StyledDialogTitle>
            <DialogContent style={{ padding: 0 }} dividers={true}>
                <DialogContentText
                    paddingX={"39px"}
                    paddingTop={"20px"}
                    paddingBottom={"36px"}
                    tabIndex={-1}
                >
                    <Box display="flex" alignItems="center">
                        <Text
                            marginRight="16px"
                            fontSize="18px"
                            color="grey"
                            colorVariant="primary4"
                        >
                            Risk Status{" "}
                        </Text>{" "}
                        <Badge disableClick type="red">
                            Red
                        </Badge>
                    </Box>
                    <DialogContentWrapper>
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
                                <DataInfo
                                    title="Trigger:"
                                    value={
                                        "The asset's risk profile has changed significantly."
                                    }
                                />
                            </Box>
                            <Box flex={1}>
                                <DataInfo
                                    title="Event Summary:"
                                    value=" A significant amount of Compound were
                                transferred."
                                />
                            </Box>
                        </Box>
                        <Box>
                            <DataInfo
                                title="Details:"
                                value="[Token % out of the entire circulation] 0.58% were transferred. A significant movement is detected when there are more than 1% of the tokens in circulation that were moved in a single transaction. Such a significant movement usually triggers movements in the asset's price and therefor should be monitored closely."
                            />
                        </Box>
                    </DialogContentWrapper>
                    <Box marginTop={3} display="flex" justifyContent={"center"}>
                        <Button size="md" inline>
                            Continue
                        </Button>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
