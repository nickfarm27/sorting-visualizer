import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./styles/theme.scss";
import styles from "./App.module.scss";
import { useAppSelector } from "./store/hooks";

function App() {
    const darkTheme = useAppSelector((state) => state.settings.darkTheme);
    // const dispatch = useAppDispatch();

    // const changeThemeHandler = (e: React.MouseEvent) => {
    //     dispatch(settingsActions.changeTheme());
    // };

    const theme = darkTheme ? "dark" : "light";

    return (
        <div className={`${styles.App} ${theme}`}>
            <Header />
            <Body />
            {/* <button onClick={changeThemeHandler}>Change Theme</button> */}
        </div>
    );
}

export default App;
