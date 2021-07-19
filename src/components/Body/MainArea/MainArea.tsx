import React from 'react'
import styles from "./MainArea.module.scss"
import Visualizer from './Visualizer'

interface Props {
    
}

const MainArea = (props: Props) => {
    return (
        <div className={styles["main-area"]}>
            <Visualizer />
        </div>
    )
}

export default MainArea
