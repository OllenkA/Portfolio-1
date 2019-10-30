import React from 'react';
import styles from './Title.module.css';


function Title(props) {

    return <header className={styles.main}>
        {props.title}
    </header>

}

export default Title;