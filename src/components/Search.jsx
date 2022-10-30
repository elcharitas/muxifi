import { Box, styled } from "@mui/material";
import { SearchInput } from "src/components/styles";
import { SvgIcon } from "./SvgIcon";

const SearchBox = styled(Box)(({ theme }) => ({
    border: "1px dashed",
    borderColor: theme.palette.tertiary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    padding: "10px 14px",
    borderRadius: 48,
}));

export const Search = ({ sx, handleChange, ...props }) => {
    return (
        <SearchBox sx={sx} {...props}>
            <SvgIcon name="search-icon" size="26" />
            <SearchInput
                type="text"
                placeholder="Search..."
                sx={{ mx: 1 }}
                onChange={handleChange}
            />
            <SvgIcon name="close-icon" size="26" />
        </SearchBox>
    );
};
