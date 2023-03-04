import React from "react";
import { Droppable } from "react-beautiful-dnd";
import style from '../style.module.css'
import Card from './Card';
import { observer } from "mobx-react-lite";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Column = observer((props) => {

    return (
        <Accordion
            sx={{ backgroundColor: '#fff' }}
            defaultExpanded={true}
            key={props.columnId}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                {props.column.name}
                <div className={style.countblock} style={{background:'rgb(239 239 239)', color:'black'}}>
                    {props.column.items.length}
                </div>
            </AccordionSummary>
            <AccordionDetails
            sx={{ backgroundColor: '#e0e0e0' }}>
                <Droppable droppableId={props.columnId} key={props.columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={props.format === 'канбан' ? style.column : style.column_slide}
                            >
                                {props.column.items.map((item, index) => {
                                    return (
                                        <Card key={index} item={item} format='лист' index={index} />
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </AccordionDetails>
        </Accordion>
    );
});

export default Column;