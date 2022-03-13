import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => (
    <nav className={styles.navSidebar}>
        <ul className="mainmenu">
            <li className={styles.mainMenuItem}>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.mainMenuItem
                    }
                >
                    Profile
                </NavLink>
            </li>
            <li className={styles.mainMenuItem}>
                <NavLink
                    to="/dialogs"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.mainMenuItem
                    }
                >
                    Messages
                </NavLink>
            </li>
            <li className={styles.mainMenuItem}>
                <NavLink
                    to="/news"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.mainMenuItem
                    }
                >
                    News
                </NavLink>
            </li>
            <li className={styles.mainMenuItem}>
                <NavLink
                    to="/music"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.mainMenuItem
                    }
                >
                    Music
                </NavLink>
            </li>
            <li className={styles.mainMenuItem}>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.mainMenuItem
                    }
                >
                    Settings
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar
