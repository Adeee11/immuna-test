export const shortenAddress = (
    address: string,
    startChars = 6,
    endChars = 4
) => {
    return address.slice(0, startChars) + "......." + address.slice(-endChars);
};
