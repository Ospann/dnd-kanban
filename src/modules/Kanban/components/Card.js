import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import FlagIcon from '@mui/icons-material/Flag';
import styles from '../style.module.css';
import Modal from './Modal';
import Settings from './Settings';

const Card = ({ item, index, format }) => {
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(item.fav);
    const anchorRef = React.useRef(null);


    const openModal = () => {
        setOpenModal(true)
    }

    const [openMod, setOpenModal] = useState(false)

    const closeModal = () => {
        setOpenModal(false)
    }


    const handleToggle = (event) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    React.useEffect(() => {
        console.log(flag);
    }, [flag])

    const handlesetFlag = (event) => {
        console.log(event)
        setFlag(!flag);
        handleClose(event);
    }

    const prevOpen = React.useRef(open);
    console.log(format)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
        >
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            borderRadius: '5px',
                            position: 'relative',
                            background: flag === true ? '#fcdea8' : '#fff',
                            ...provided.draggableProps.style
                        }}
                    >
                        <Modal info={item} open={openMod} onClose={closeModal} />
                        <div style={{ height: '100%' }}
                            onClick={openModal}
                            className={styles.card + ' ' + (format === 'канбан' ? '' : styles.card_slide)}>
                            <FlagIcon sx={{
                                position: 'absolute',
                                right: 0,
                                color: 'orange',
                                bottom: '16px',
                                marginRight: '1rem',
                                display: flag === true ? 'block' : 'none'
                            }} />
                            <div>
                                {item.Имя}
                            </div>
                            <div>
                                {item.Телефон}
                            </div>
                            <div>
                                {'3 day'}
                            </div>
                            <div style={{ color: '#808080' }}>
                                {item.date}
                            </div>
                        </div>
                        <Settings
                            setclass={'setting'}
                            anchorRef={anchorRef}
                            open={open}
                            flag={flag}
                            toggle={handleToggle}
                            click={handleListKeyDown}
                            close={handleClose}
                            setFlag={handlesetFlag}
                        />
                    </div>
                );
            }}
        </Draggable>
    );
};

export default Card;
