import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { settingsActions } from "../../../../store/settings-slice";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styles from "./ThemeIcon.module.scss";

interface Props {}

const ThemeIcon = (props: Props) => {
    const darkTheme = useAppSelector((state) => state.settings.darkTheme);
    const dispatch = useAppDispatch();

    const displayIcon = darkTheme ? faMoon : faSun;

    const changeThemeHandler = () => {
        dispatch(settingsActions.changeTheme());
    };

    return (
        <div className={styles["theme-icon"]} onClick={changeThemeHandler}>
            <SwitchTransition mode={"out-in"}>
                <CSSTransition
                    key={darkTheme ? "moon" : "sun"}
                    timeout={300}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames={{
                        enter: styles["fade-enter"],
                        enterActive: styles["fade-enter-active"],
                        exit: styles["fade-exit"],
                        exitActive: styles["fade-exit-active"],
                    }}
                >
                    <FontAwesomeIcon icon={displayIcon} />
                </CSSTransition>
            </SwitchTransition>
            <p className={styles["name"]}>THEME</p>
        </div>
    );
};

export default ThemeIcon;
