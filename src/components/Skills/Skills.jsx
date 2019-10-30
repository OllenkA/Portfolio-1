import React from 'react';
import styles from './Skills.module.css';
import { connect } from 'react-redux';
import Title from "../Title/Title";


function Skills(props) {

    let skill = props.skills.map(el => {
            return  <section key={el.id} className={styles.skill}>
            <img className={styles.url} src={el.url} alt='It is my skill'/>
            <h6 className={styles.name}>{el.name}</h6>
            </section>});

    return (
        <main id={'skills'} className={styles.skills}>
            <article className={styles.container}>
                <Title title='MY SKILLS'/>
                <figure className={styles.all}>
                    {skill}
                </figure>
            </article>
        </main>
    )
}

let mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Skills);