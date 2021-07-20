import React from "react";
import {
    faForward,
    faSort,
    faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SettingsBar.module.scss";
import ThemeIcon from "./Icons/ThemeIcon";
import { useAppSelector } from "../../../store/hooks";
import { settingsActions } from "../../../store/settings-slice";
import NormalIcon from "./Icons/NormalIcon";
import IconWithSliderInput from "./Icons/IconWithSliderInput";

interface Props {}

const SettingsBar = (props: Props) => {
    const speed = useAppSelector((state) => state.settings.speed);
    const arraySize = useAppSelector((state) => state.settings.arraySize);
    const changeSpeedAction = settingsActions.changeSpeed;
    const changeArraySizeAction = settingsActions.changeArraySize;
    const resetArrayAction = settingsActions.resetArray;

    return (
        <div className={styles["settings-bar"]}>
            <IconWithSliderInput
                icon={faForward}
                name="SPEED"
                fontSize="1.5rem"
                min={1}
                max={999}
                value={speed}
                action={changeSpeedAction}
            />
            <IconWithSliderInput
                icon={faSort}
                name="ARRAY SIZE"
                fontSize="1.7rem"
                min={3}
                max={100}
                value={arraySize}
                action={changeArraySizeAction}
            />
            <NormalIcon icon={faRedoAlt} name="RESET" fontSize="1.3rem" action={resetArrayAction} />
            <ThemeIcon />
        </div>
    );
};

export default SettingsBar;
