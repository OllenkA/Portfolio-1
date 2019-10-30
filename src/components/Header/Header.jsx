import React from 'react';
import styles from './Header.module.css';
import Menu from "./Menu/Menu";

function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Menu />
            </nav>
        </header>
    )
}

export default Header;