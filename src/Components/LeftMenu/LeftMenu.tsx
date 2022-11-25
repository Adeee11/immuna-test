import { Box, css, styled } from "@mui/system";
import React, { SVGProps } from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={15}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="inherit"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.667 13.333A1.667 1.667 0 0 0 8.333 15h5A1.667 1.667 0 0 0 15 13.333V10a1.668 1.668 0 0 0-1.667-1.667h-5A1.667 1.667 0 0 0 6.667 10v3.333Zm-3.334-5H1.667A1.667 1.667 0 0 0 0 10v3.333A1.667 1.667 0 0 0 1.667 15h1.666A1.668 1.668 0 0 0 5 13.333V10a1.667 1.667 0 0 0-1.667-1.667ZM15 1.667A1.667 1.667 0 0 0 13.333 0H1.667A1.666 1.666 0 0 0 0 1.667V5a1.667 1.667 0 0 0 1.667 1.667h11.666C14.254 6.667 15 5.92 15 5V1.667Z"
            fill="currentColor"
        />
    </svg>
);

const AlertIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={17}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="inherit"
            {...props}
        >
            <path
                d="M16.403 12.985 9.182 1.213c-.48-.785-1.267-.774-1.748.01L.214 12.98c-.481.785-.122 1.391.797 1.391h14.593c.92 0 1.28-.602.799-1.386ZM8.302 3.818c.462 0 .82.511.796 1.135l-.146 3.762C8.928 9.34 8.635 9.85 8.3 9.85s-.629-.51-.652-1.135l-.145-3.762c-.024-.624.335-1.135.799-1.135Zm0 8.867c-.584 0-.984-.427-.972-1.01 0-.596.401-1.01.972-1.01.594 0 .97.414.983 1.01 0 .583-.389 1.01-.983 1.01Z"
                fill="currentColor"
            />
        </svg>
    );
};

const LogoMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={132}
        height={31}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M29.335 7.393 15.274 24.76l-.003-.003v-7.446l9.832-13.34 4.233 3.422ZM15.27 17.31V0C7.71 7.28 0 5.931 0 5.931 0 24.934 15.27 31 15.27 31v-6.244L7.252 17.27l3.718-3.975 4.3 4.015ZM39.255 10.392h1.917c.497 0 .923.177 1.278.53.355.352.532.776.532 1.27v12.28h-3.727v-14.08Zm0-4.128h1.917c.497 0 .923.176 1.278.529.355.353.532.776.532 1.27v1.112h-3.727V6.264ZM56.858 24.472h-3.674v-8.998c0-.847-.266-1.465-.798-1.853a2.693 2.693 0 0 0-1.704-.582c-.64 0-1.207.194-1.704.582-.497.388-.745 1.006-.745 1.853v8.998h-3.728v-8.257c0-2.4.621-4.005 1.864-4.817a8.44 8.44 0 0 1 4.206-1.323c.817 0 1.615.088 2.396.264.781.177 1.491.53 2.13 1.059a4.458 4.458 0 0 1 1.864-.953 10.006 10.006 0 0 1 2.29-.37c1.561 0 2.999.405 4.312 1.217 1.313.812 1.97 2.453 1.97 4.923v8.257h-1.863c-.533 0-.977-.159-1.332-.477-.319-.352-.479-.794-.479-1.323v-7.198c0-.847-.266-1.465-.798-1.853a2.693 2.693 0 0 0-1.704-.582c-.64 0-1.225.194-1.757.582-.497.388-.746 1.006-.746 1.853v8.998ZM80.265 24.472H76.59v-8.998c0-.847-.266-1.465-.799-1.853a2.693 2.693 0 0 0-1.704-.582c-.639 0-1.207.194-1.703.582-.498.388-.746 1.006-.746 1.853v8.998h-3.727v-8.257c0-2.4.621-4.005 1.863-4.817a8.44 8.44 0 0 1 4.207-1.323c.816 0 1.615.088 2.396.264.78.177 1.49.53 2.13 1.059a4.457 4.457 0 0 1 1.863-.953 10.007 10.007 0 0 1 2.29-.37c1.562 0 3 .405 4.313 1.217 1.313.812 1.97 2.453 1.97 4.923v8.257H87.08c-.532 0-.976-.159-1.331-.477-.32-.352-.48-.794-.48-1.323v-7.198c0-.847-.265-1.465-.798-1.853a2.693 2.693 0 0 0-1.704-.582c-.639 0-1.224.194-1.757.582-.497.388-.745 1.006-.745 1.853v8.998ZM103.671 10.392v8.258c0 2.505-.656 4.146-1.97 4.922a8.32 8.32 0 0 1-4.313 1.165 8.75 8.75 0 0 1-4.206-1.27c-1.242-.777-1.864-2.383-1.864-4.817v-8.258h3.728v8.998c0 .847.248 1.465.745 1.853a2.693 2.693 0 0 0 1.704.582c.639 0 1.207-.194 1.704-.582.532-.388.798-1.006.798-1.852v-7.2c0-.493.16-.917.48-1.27.355-.352.798-.529 1.331-.529h1.863ZM117.973 24.472h-1.864c-.532 0-.976-.159-1.331-.477-.319-.352-.479-.794-.479-1.323v-7.198c0-.847-.266-1.465-.799-1.853a2.693 2.693 0 0 0-1.703-.582c-.639 0-1.207.194-1.704.582-.497.388-.746 1.006-.746 1.853v8.998h-3.727v-8.257c0-2.4.621-4.005 1.864-4.817a8.44 8.44 0 0 1 4.206-1.323 8.05 8.05 0 0 1 4.313 1.217c1.313.812 1.97 2.453 1.97 4.923v8.257ZM128.121 17.38c-.497.246-1.189.476-2.076.687l-1.225.265c-.639.176-1.1.406-1.384.688-.249.388-.373.776-.373 1.165 0 .529.16.952.479 1.27.32.282.781.423 1.385.423.994 0 1.775-.282 2.343-.847.567-.564.851-1.34.851-2.329V17.38Zm.852 6.51a6.25 6.25 0 0 1-2.396.688 17.16 17.16 0 0 1-2.183.159c-1.278 0-2.396-.336-3.354-1.006-.959-.706-1.438-1.853-1.438-3.44 0-1.483.426-2.541 1.278-3.177.888-.635 2.006-1.058 3.355-1.27.177 0 .39-.018.638-.053.249-.07.533-.123.852-.159 1.562-.211 2.343-.67 2.343-1.376 0-.53-.284-.864-.852-1.005a4.753 4.753 0 0 0-1.491-.265 3.9 3.9 0 0 0-1.331.212 1.45 1.45 0 0 0-.852.794h-3.567a4.07 4.07 0 0 1 1.491-2.7c.958-.812 2.325-1.217 4.1-1.217 1.987 0 3.478.335 4.472 1.005 1.03.706 1.544 1.694 1.544 2.964v4.817c0 1.412-.266 2.523-.798 3.335-.497.776-1.101 1.34-1.811 1.694Z"
            fill="#2C2C2C"
        />
    </svg>
);

const LeftMenuWrapper = styled(Box)`
    padding: 30px 36px;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 268px;
    box-shadow: 0px 2px 10px rgba(132, 132, 132, 0.07);
`;

const Link = (
    props: React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > & { isActive?: boolean }
) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
};

const StyledLink = styled(Link)`
    ${({ theme, isActive }) => {
        const DefaultStyles = `background-color: ${theme.palette.primary.white};
      color: #4d4d4d;`;
        const ActiveStyles = ` background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.white};`;
        return css`
            ${isActive ? ActiveStyles : DefaultStyles}
            &:hover {
                ${ActiveStyles}
            }
        `;
    }}
`;

const LeftMenuList = styled(Box)`
    width: 194px;
`;

const LeftMenuItem = ({
    icon,
    location,
    text,
}: {
    icon: React.ReactElement;
    location: string;
    text: string;
}) => {
    const navigate = useNavigate();
    const matches = useMatch(location);
    return (
        <StyledLink
            href={location}
            isActive={!!matches}
            onClick={(e) => {
                e.preventDefault();
                navigate(location);
            }}
        >
            {icon}
            <Box component="span">{text}</Box>
        </StyledLink>
    );
};

export function LeftMenu() {
    return (
        <LeftMenuWrapper>
            <LogoMedium />
            <LeftMenuList>
                <LeftMenuItem
                    icon={<DashboardIcon />}
                    text="Dashboard"
                    location="/dashboard"
                />
            </LeftMenuList>
        </LeftMenuWrapper>
    );
}
