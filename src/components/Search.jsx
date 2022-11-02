import { useState } from "react";
import { Box, IconButton, styled } from "@mui/material";
import { useTranslation } from "next-i18next";
import { SearchInput } from "src/components/styles";
import { SvgIcon } from "./SvgIcon";

const SearchBox = styled(Box)(({ theme }) => ({
    border: "1px dashed",
    borderColor: theme.palette.tertiary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    padding: "0",
    borderRadius: 48,
}));

export const Search = ({ sx, handleChange, ...props }) => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    return (
        <SearchBox sx={sx} {...props}>
            <IconButton size="small">
                <SvgIcon name="search-icon" size="26" />
            </IconButton>
            <SearchInput
                type="text"
                placeholder={t("nav.search")}
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                    handleChange?.(event.target.value);
                }}
            />
            <IconButton size="small" onClick={() => setSearch("")}>
                <SvgIcon name="close-icon" size="26" />
            </IconButton>
        </SearchBox>
    );
};
