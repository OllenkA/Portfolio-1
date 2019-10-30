import React from 'react';
import styles from './Ava.module.css';
import photo from '../../../assets/myPhoto.jpg';
import photo1 from '../../../assets/photo.jpg';


function Ava() {
    return <article className={styles.container}>
        <section className={styles.wrapper}>
            <aside className={styles.photo}>
                <section className={styles.front}>
                    <img src={photo} alt={'it is my'}/>
                </section>
                <section className={styles.back}>
                    <img src={photo1} alt=''/>
                </section>
            </aside>
        </section>
    </article>
}

export default Ava;