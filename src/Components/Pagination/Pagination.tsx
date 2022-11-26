
import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "../../Assets/Icons";

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
}

const PaginationContainer = styled(Box)`
    background: #ffffff;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    flex-wrap: nowrap;
`;
const PageBtn = styled('button')`
    background: #f3f3f3;
    border-radius: 4px;
    padding: 8px 10px;
    color: #707070;
    font-size: 12px;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition:  all 0.3s linear;
  
    &.big {
        padding: 8px 18px;
    }
    &:hover , &.active {
        background: #1D7DEA;
        color: #fff;
    }
    &:not(:last-child){
        margin-right: 12px;
    }
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
                ...new Array(3).fill(0).map((item, i) => (i + 1)
                ),
                "...",
                totalPages,
            ];
        } else {
            arrNum = new Array(totalPages).fill(0).map((item, index) => (index + 1)
            );
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
                <ChevronRight  fontSize="inherit" />
            </PageBtn>
        </PaginationContainer>
    );
};
