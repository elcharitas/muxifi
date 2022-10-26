import React from "react";
import SearchIcon from "src/assets/svgs/search-icon.svg";
import CloseIcon from "src/assets/svgs/close-icon.svg";
import { Box, styled } from "@mui/material";
import { SearchInput } from "src/components/styles";

const SearchBox = styled(Box)({
    border: "1px dashed #565D5A",
    margin: "0 0 36px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 632,
    padding: "14px",
    borderRadius: 48,
});

export const Search = () => {
    return (
        <SearchBox>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search for music" />
            <CloseIcon />
        </SearchBox>
    );
};
