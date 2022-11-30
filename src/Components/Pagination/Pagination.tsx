import { Box, css, styled } from "@mui/material";
import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "Assets/Icons";

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
}

const PaginationContainer = styled(Box)`
    ${({ theme }) => {
        return css`
            color: ${theme.palette.common.white};
            border-radius: 6px;
            padding: 8px;
            display: flex;
            flex-wrap: nowrap;
        `;
    }}
`;
const PageBtn = styled("button")`
    ${({ theme }) => {
        return css`
            background: ${theme.colors.grey.primary0};
            border-radius: 4px;
            padding: 8px 10px;
            color: ${theme.colors.grey.primary5};
            font-size: 12px;
            font-weight: 400;
            border: none;
            cursor: pointer;
            transition: all 0.3s linear;

            &.big {
                padding: 8px 18px;
            }
            &:hover,
            &.active {
                background: ${theme.palette.primary.main};
                color: ${theme.palette.common.white};
            }
            &:not(:last-child) {
                margin-right: 12px;
            }
        `;
    }}
`;

export const Pagination = ({
    totalPages,
    currentPage,
    onChange,
}: IPaginationProps) => {
    const pageBtns = useMemo(() => {
        let arrNum: (string | number)[] = [];

        if (totalPages > 4) {
            arrNum = [
                ...new Array(3).fill(0).map((item, i) => i + 1),
                "...",
                totalPages,
            ];
        } else {
            arrNum = new Array(totalPages)
                .fill(0)
                .map((item, index) => index + 1);
        }
        return arrNum;
    }, [totalPages]);
    return (
        <PaginationContainer>
            <PageBtn className="big">
                <ChevronLeft fontSize="inherit" />
            </PageBtn>
            {pageBtns.map((item) => {
                return (
                    <PageBtn
                        className={currentPage === item ? "active" : ""}
                        key={item}
                    >
                        {item}
                    </PageBtn>
                );
            })}
            <PageBtn className="big">
                <ChevronRight fontSize="inherit" />
            </PageBtn>
        </PaginationContainer>
    );
};
