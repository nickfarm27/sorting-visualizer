import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeIcon.module.scss"

interface Props {}

const ThemeIcon = (props: Props) => {
    return (
        <div className={styles["theme-icon"]}>
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
};

export default ThemeIcon;
