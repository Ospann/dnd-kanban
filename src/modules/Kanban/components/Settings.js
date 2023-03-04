import React from "react";
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener'; 
import FlagIcon from '@mui/icons-material/Flag';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import styles from '../style.module.css';

const Settings = ({ open, flag, close, toggle, setFlag, click, anchorRef, setclass }) => {
    return (
        <React.Fragment>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 10 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={close}>
                                <MenuList
                                    autoFocusItem={open}
                                    onKeyDown={click}
                                >
                                    <MenuItem
                                        onClick={setFlag}>
                                        {flag === true ? 'Убрать флаг' : 'Добавить флаг'}
                                    </MenuItem>
                                    <MenuItem
                                        onClick={close}>
                                        Удалить
                                    </MenuItem>
                                    <MenuItem
                                        onClick={close}>
                                        Не целевой
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            <IconButton
                className={styles[setclass]}
                onClick={toggle}
                ref={anchorRef}
            >
                <MoreHorizIcon />
            </IconButton>
        </React.Fragment>
    );
}

export default Settings;