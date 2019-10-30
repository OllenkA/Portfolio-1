import React from 'react';
import styles from './Greeting.module.css';

function Greeting () {
    return <main className={styles.greeting}>
                <h2 className={styles.greet}>Hi THERE!</h2>
                <h2 className={styles.greet}>My name is Shamko Olga</h2>
                <strong className={styles.h1}>I am junior<br/>
                    <span className={styles.pseudo}>
                    frontend developer</span></strong>
            </main>
}

export default Greeting;