import React from 'react';
import styles from './AboutMe.module.css';
import Greeting from "./Greeting/Greeting";
import Ava from "./Ava/Ava";

function AboutMe () {
    return <div id={'aboutMe'} className={styles.main}>
        <div className={styles.container}>
            <Greeting/>
            <Ava/>
        </div>
    </div>
}

export default AboutMe;