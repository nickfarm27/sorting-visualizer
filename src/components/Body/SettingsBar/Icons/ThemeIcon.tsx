import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import styles from "./ThemeIcon.module.scss";
import { settingsActions } from "../../../../store/settings-slice";

interface Props {}

const ThemeIcon = (props: Props) => {
    const darkTheme = useAppSelector((state) => state.settings.darkTheme);
    const dispatch = useAppDispatch();

    const displayIcon = darkTheme ? faMoon : faSun;

    const changeThemeHandler = () => {
        dispatch(settingsActions.changeTheme());
    };

    return (
        <div className={styles["theme-icon"]}>
            <FontAwesomeIcon icon={displayIcon} onClick={changeThemeHandler} />
        </div>
    );
};

export default ThemeIcon;
