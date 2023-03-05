import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
// import FilterSelect from "./FilterBody";
import Menu from "@mui/material/Menu";

const Filter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                startIcon={<FilterListIcon />}
                sx={{ color: "gray" }}
                onClick={handleClick}
            >
                Фильтрация
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                <Paper
                    style={{
                        width: "350px",
                        height: "fit-content",
                        boxSizing: "border-box",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        boxShadow: 'none'
                    }}
                >
                {props.select.map((row, index)=>{
                    return <div></div>
                    // return <FilterSelect name={row.name} key={index} options={row.options} />;
                })}
                </Paper>
            </Menu>
        </React.Fragment>
    );
};

export default Filter;
