import React from 'react'
import Algorithms from './Algorithms'
import styles from "./Header.module.scss"
import ProfileIcons from './ProfileIcons'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Sorting<br />Visualizer</h1>
            <Algorithms />
            <ProfileIcons />
        </div>
    )
}

export default Header
