import React, { useState } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./styles/theme.scss";
import styles from "./App.module.scss";

function App() {
    const [theme, setTheme] = useState("light");

    const changeThemeHandler = (e: React.MouseEvent) => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <div className={`${styles.App} ${theme}`}>
            <Header />
            <Body />
            {/* <button onClick={changeThemeHandler}>Change Theme</button> */}
        </div>
    );
}

export default App;
