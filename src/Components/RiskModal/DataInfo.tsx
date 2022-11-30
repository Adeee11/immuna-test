import { Text } from "Components/Text";

export const DataInfo = ({
    title,
    value,
}: {
    title: string;
    value: string;
}) => {
    return (
        <>
            <Text
                fontSize="14px"
                color="grey"
                colorVariant="primary2"
                marginBottom="10px"
            >
                {title}
            </Text>
            <Text
                color="grey"
                colorVariant="primary3"
                marginBottom="30px"
                fontSize="14px"
            >
                {value}
            </Text>
        </>
    );
};
