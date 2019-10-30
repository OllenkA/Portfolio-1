import React from 'react';
import styles from './MyWorks.module.css';
import {connect} from "react-redux";
import {showNextWorksAC, showPreviousWorksAC} from '../../redux/reducer';
import Title from "../Title/Title";


function MyWorks(props) {

    let onPreviousPhoto = (id) => {
        props.showPreviousWorks(id)
    };

    let onNextPhoto = (id) => {
        props.showNextWorks(id);
    };

    let newImage = props.works.find(el => el.visible === true);

    return <main id={'projects'} className={styles.works}>
        <article className={styles.container}>
            <Title title='MY PROJECTS'/>
            <figure className={styles.switch}>
                <h6 className={styles.but} onClick={() => onPreviousPhoto(newImage.id)}>
                    &#9668;
                </h6>
                <section className={styles.project}>
                    <h3 className={styles.nameProject}>{newImage.title}</h3>
                    <img className={styles.href} src={newImage.image} alt=''/>

                    <a href={newImage.linkToPage} className={styles.btn}
                       target="_blank" rel="noreferrer noopener">
                        {newImage.linkToPage !== ''
                            ? 'VIEW THE GITHUB PAGES OF THIS PROJECT'
                            : 'THIS PROJECT IS IN THE DEVELOPMENT STAGE'}
                    </a>
                    <a href={newImage.linkToCode} className={styles.btn}
                       target="_blank" rel="noreferrer noopener">
                        VIEW THE CODE OF THIS PROJECT
                    </a>
                </section>
                <h6 className={styles.but} onClick={() => onNextPhoto(newImage.id)}>
                    &#9658;
                </h6>
            </figure>
        </article>
    </main>
}

const mapStateToProps = (state) => {
    return {
        works: state.works,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showNextWorks: (id) => {
            dispatch(showNextWorksAC(id));
        },
        showPreviousWorks: (id) => {
            dispatch(showPreviousWorksAC(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWorks);