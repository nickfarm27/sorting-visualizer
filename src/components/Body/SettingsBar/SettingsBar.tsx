import React from "react";
import {
    faForward,
    faSort,
    faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icons/Icon";
import styles from "./SettingsBar.module.scss";
import ThemeIcon from "./Icons/ThemeIcon";

interface Props {}

const SettingsBar = (props: Props) => {
    return (
        <div className={styles["settings-bar"]}>
            <Icon icon={faForward} name="SPEED" fontSize="1.5rem" />
            <Icon icon={faSort} name="ARRAY SIZE" fontSize="1.8rem" />
            <Icon icon={faRedoAlt} name="RESET" fontSize="1.3rem" />
            <ThemeIcon />
        </div>
    );
};

export default SettingsBar;
