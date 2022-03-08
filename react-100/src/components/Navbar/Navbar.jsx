import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => (
    <nav className={styles.navSidebar}>
        <ul className="mainmenu">
            <li className={styles.mainMenuItem}>
                <a href="w">Profile</a>
            </li>
            <li className={styles.mainMenuItem}>
                <a href="w">Messages</a>
            </li>
            <li className={styles.mainMenuItem}>
                <a href="w" className={`${styles.link} ${styles.active}`}>
                    News
                </a>
            </li>
            <li className={styles.mainMenuItem}>
                <a href="w">music</a>
            </li>
            <li className={styles.mainMenuItem}>
                <a href="w">settings</a>
            </li>
        </ul>
    </nav>
)

export default Navbar
