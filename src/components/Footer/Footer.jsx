import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';


function Footer(props) {
    let transition = {
        transition: '1s'
    };

    let icons = props.socialIcons.map(i => {
        // eslint-disable-next-line react/jsx-no-target-blank
        return <a key={i.id} className={styles.socialIcon} style={transition} href={i.href}
                  target="_blank" rel="noreferrer noopener" >
            <FontAwesomeIcon size={i.size} icon={i.icon}  />
        </a>

    });
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Olga Shamko</span>
                <nav className={styles.socialBlock}>
                    {icons}
                </nav>
                <span className={styles.blockTitle}>© 2019 All Rights Reserved.</span>
            </div>
        </footer>
    )
}

let mapStateToProps = (state) => {
    return {
        socialIcons: state.socialIcons
    }
};

export default connect(mapStateToProps)(Footer);