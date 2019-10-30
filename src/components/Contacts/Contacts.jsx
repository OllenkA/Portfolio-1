import React from 'react';
import styles from './Contacts.module.css';
import Title from "../Title/Title";

function Contacts() {
    return <article id={'contacts'} className={styles.contacts}>
        <section className={styles.container}>
            <Title title='CONTACT'/>
            <form className={styles.formWrapper}>
                <input className={styles.formArea} placeholder='Name' type="text"/>
                <input className={styles.formArea} placeholder='E-mail' type="email"/>
                <textarea className={styles.messageArea} placeholder='Your message'/>
                <span className={styles.btnSubmit}>SEND</span>
            </form>
        </section>
    </article>
}

export default Contacts;