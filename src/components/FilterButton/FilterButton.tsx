import { Autocomplete, Box, Icon, TextField, Typography } from "@mui/material";
import "./FilterButton.css";
import { useEffect, useState } from "react";

const FilterButton = ({ purpose, options }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    useEffect(() => {
        console.log(selectedOptions);
    }, [selectedOptions]);
    return (
        <Box className="filter-btn">
            {selectedOptions.length ? (
                <Typography variant="body1" className="filter-btn-title">
                    {purpose}
                </Typography>
            ) : null}
            <Autocomplete
                style={{
                    minWidth: "200px",
                }}
                size="small"
                multiple
                options={options}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={selectedOptions.length ? "" : purpose}
                        style={{
                            padding: "0rem",
                        }}
                    />
                )}
                onChange={(event, value: string[]) => {
                    setSelectedOptions(value);
                }}
            />
        </Box>
    );
};

export default FilterButton;
