import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
                <NavLink
                    to="/dialogs/1"
                    className={({ isActive }) => (isActive ? s.activeLink : '')}
                >
                    Dima
                </NavLink>
            </div>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink
                    to="/dialogs/2"
                    className={({ isActive }) => (isActive ? s.activeLink : '')}
                >
                    Sveta
                </NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink
                    to="/dialogs/3"
                    className={({ isActive }) => (isActive ? s.activeLink : '')}
                >
                    Sasha
                </NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink
                    to="/dialogs/4"
                    className={({ isActive }) => (isActive ? s.activeLink : '')}
                >
                    Andrey
                </NavLink>
            </div>
        </div>

        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you? </div>
            <div className={s.message}>Yo</div>
        </div>
    </div>
)

export default Dialogs
