import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Algorithms from './Algorithms'
import AlgorithmsDropdown from './AlgorithmsDropdown'
import styles from "./Header.module.scss"
import ProfileIcons from './ProfileIcons'

interface Props {
    
}

const Header = (props: Props) => {
    const {width} = useWindowDimensions();

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Sorting<br />Visualizer</h1>
            {width > 768 ? (
                <Algorithms />
            ) : (
                <AlgorithmsDropdown />
            )}
            <ProfileIcons />
        </div>
    )
}

export default Header
