import React from "react";
import SortIcon from '@mui/icons-material/Sort';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
// import SortSelect from "./SortBody";
import { Context } from "../../../index";

const Sort = (props) => {
    const { kanban } = React.useContext(Context);
    const [SortOption, setSort] = React.useState(props.select);

    const Sorting = (name, direction, key) => {
        const newArray = [...SortOption];
        newArray[key] = { name: name, direction: direction }
        setSort(newArray);
        kanban.sortData(newArray);
    }

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
                startIcon={<SortIcon />}
                sx={{ color: "gray" }}
                onClick={handleClick}
            >
                Сортировка
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
                    {SortOption.map((row, index) => {
                        return <div></div>
                        // return <SortSelect change={Sorting} index={index} name={row.name} key={index} direction={row.direction} />;
                    })}
                </Paper>
            </Menu>
        </React.Fragment>
    );
};

export default Sort;
