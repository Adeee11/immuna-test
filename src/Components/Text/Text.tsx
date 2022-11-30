import { css, styled, Theme, Typography } from "@mui/material";

type TypographyProps = React.ComponentProps<typeof Typography>;

export const Text = styled(Typography)`
    ${(
        args: TypographyProps & { theme: Theme } & {
            color?: keyof Theme["colors"];
            colorVariant?: keyof Theme["colors"]["blue"];
        }
    ) => {
        const { color = "grey", colorVariant = "primary1" } = args;
        const colorObject = args.theme.colors[color];
        const textColor = colorObject
            ? colorObject[colorVariant as "primary1"]
            : args.theme.colors.grey.primary1;
        return css`
            color: ${textColor};
        `;
    }}
`;
