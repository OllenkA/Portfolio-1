import React, {useState} from 'react';
import NavMenu from "../NavMenu/NavMenu";
import styles from './Menu.module.css';

function Menu() {

    const [hide, isHidden] = useState(true);

    return (<>
            {hide ? <h1 className={styles.word}
                        onClick={() => {
                            isHidden(false)
                        }}>
                    MENU
                </h1> :
                <NavMenu/>}
        </>
    )
}

export default Menu;