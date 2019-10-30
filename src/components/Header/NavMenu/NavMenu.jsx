import React, {useState} from 'react';
import styles from './NavMenu.module.css';
import {connect} from 'react-redux';
import Menu from "../Menu/Menu";


function NavMenu(props) {

    const [hide, isHidden] = useState(true);

    let links = props.navMenu.map(el => {
        return <a key={el.id} href={el.href}
                     className={styles.link}>
            <h3 className={styles.name}>{el.nameBlock}</h3>
        </a>
    });

    return <>
        {hide ? <nav className={styles.nav}>
                <img className={styles.img}
                     src={'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}
                     alt='Menu'
                     onClick={() => {isHidden(!hide)}}/>
                {links}
            </nav>
            : <Menu/>
        }
        </>
}

let mapStateToProps = (state) => {
    return {
        navMenu: state.navMenu,
    }
};

export default connect(mapStateToProps)(NavMenu);