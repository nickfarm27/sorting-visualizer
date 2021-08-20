import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./styles/theme.scss";
import styles from "./App.module.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { settingsActions } from "./store/settings-slice";

function App() {
    const darkTheme = useAppSelector((state) => state.settings.darkTheme);
    const theme = darkTheme ? "dark" : "light";
    const storedTheme = localStorage.getItem("THEME");
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (storedTheme !== theme) {
            dispatch(settingsActions.changeTheme())
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem("THEME", theme)
    }, [theme])

    return (
        <div className={`${styles.App} ${theme}`}>
            <Header />
            <Body />
        </div>
    );
}

export default App;
