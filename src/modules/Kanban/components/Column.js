import React from "react";
import { Droppable } from "react-beautiful-dnd";
import style from '../style.module.css'
import Card from './Card';
import { observer } from "mobx-react-lite";

const Column = observer((props) => {
    
    return (
        <div
            className={style.column_body}
            key={props.columnId}
        >
            <div className={style.header}>
                <div style={{
                    fontSize: '1.1rem',
                    display: 'flex',
                    gap: '0.2rem'
                }}>
                    {props.column.name}
                    <div className={style.countblock}>
                        {props.column.items.length}
                    </div>
                </div>
            </div>
            <div style={{ margin: 8 }}>
                <Droppable droppableId={props.columnId} key={props.columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={style.column}
                            >
                                {props.column.items.map((item, index) => {
                                    return (
                                        <Card key={index} item={item} format='канбан' index={index} />
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
});

export default Column;