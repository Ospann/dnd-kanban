import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SearchInput from '../../components/SearchInput';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Filter from './components/FilterBlock'
import Sort from './components/SortBlock'
// import Modal from './component/Modal'
import { Context } from '../../index';

const Filters = (props) => {
    const {kanban} = React.useContext(Context);
    const [view, setView] = useState('канбан');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (props.button === 'Перезагрузить') {

        } else {
            setOpen(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const changeHandler = () => {
        const newView = view === 'канбан' ? 'список' : 'канбан';
        setView(newView);
        kanban.setFormat(newView);
    }
    const managers = props.select.find(option => option.name === 'Менеджер').options;
    const channels = props.select.find(option => option.name === 'Канал').options
    const cities = props.select.find(option => option.name === 'Город').options;
    return (
        <div style={{
            height: '15vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', width: '92vw', justifyContent: 'space-between' }}>
                <div>
                    <Button
                        sx={{ color: '#000' }}
                        onClick={changeHandler}
                        startIcon={view === 'канбан' ? <ViewKanbanIcon /> : <FormatListBulletedIcon />}
                    >
                        {view}
                    </Button>
                    <Filter select={props.select} />
                    <Sort select={props.select} />
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <SearchInput />
                    <Button variant="contained" onClick={handleOpen}>
                        {props.button}
                    </Button>
                    {/* {props.button === 'Добавить' ?
                        <Modal
                            managers={managers}
                            cities={cities}
                            channels={channels}
                            open={open}
                            onClose={handleClose} />
                        : ''} */}

                </div>
            </div>
        </div>
    );
}

export default Filters;