import { Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export const TokenPrice = ({ address }: { address: string }) => {
    const [price, setPrice] = useState<null | number>(null);

    const fetchPriceFromApi = async () => {
        const resp = await fetch(
            `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=${address}&vs_currencies=usd`
        );
        const jsondata = await resp.json();
        setPrice(jsondata[address].usd);
    };

    useEffect(() => {
        fetchPriceFromApi();
        // Needs to Be Called on Mount so empty dependencies
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Typography fontSize="inherit">
            {price ? `$${price}` : <Skeleton width={50} height={30} />}
        </Typography>
    );
};
