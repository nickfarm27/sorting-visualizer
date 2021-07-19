import React from "react";
import MainArea from "./MainArea/MainArea";
import SettingsBar from "./SettingsBar/SettingsBar";
import styles from "./Body.module.scss";

interface Props {}

const Body = (props: Props) => {
    return (
        <div className={styles.body}>
            <SettingsBar />
            <MainArea />
        </div>
    );
};

export default Body;
