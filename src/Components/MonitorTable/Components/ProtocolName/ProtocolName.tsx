import { Box } from "@mui/material";
import { ExternalIcon } from "Assets/Icons";

export const ProtocolName = ({ name, url }: { name: string; url: string }) => {
    return (
        <Box
            component="a"
            display="flex"
            target="_blank"
            href={url}
            alignItems="center"
            fontSize="inherit"
            style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
            }}
        >
            <Box component="span" marginRight={1}>
                {name}
            </Box>{" "}
            <ExternalIcon />
        </Box>
    );
};
