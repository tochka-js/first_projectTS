import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Messages from "../Messages/Messages";

type  DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    message:string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}



const Message = (props:MessageType) => {
   return(
       <div className={style.message}>{props.message}</div>
   )
}


const Dialogs = () => {
    let dialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta' },
        {id:4, name:'Sasha' },
        {id:5, name:'Victor'},
        {id:6, name:'Valera'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='How is your it-kamasutra'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>

            </div>
        </div>
    );
}

export default Dialogs;
