import React from "react";
import {
    faForward,
    faSort,
    faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import ThemeIcon from "./Icons/ThemeIcon";
import { useAppSelector } from "../../../store/hooks";
import { settingsActions } from "../../../store/settings-slice";
import NormalIcon from "./Icons/NormalIcon";
import IconWithSliderInput from "./Icons/IconWithSliderInput";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import styles from "./SettingsBar.module.scss";
import SortIcon from "./Icons/SortIcon";

interface Props {}

const SettingsBar = (props: Props) => {
    const speed = useAppSelector((state) => state.settings.speed);
    const arraySize = useAppSelector((state) => state.settings.arraySize);
    const changeSpeedAction = settingsActions.changeSpeed;
    const changeArraySizeAction = settingsActions.changeArraySize;
    const resetArrayAction = settingsActions.resetArray;
    const { width } = useWindowDimensions();



    return (
        <div className={styles["settings-bar"]}>
            <IconWithSliderInput
                icon={faForward}
                name="SPEED"
                fontSize={width <= 768 ? "1.3rem" : "1.5rem"}
                min={1}
                max={1000}
                value={speed}
                action={changeSpeedAction}
            />
            <IconWithSliderInput
                icon={faSort}
                name="ARRAY SIZE"
                fontSize={width <= 768 ? "1.3rem" : "1.7rem"}
                min={3}
                max={40}
                value={arraySize}
                action={changeArraySizeAction}
            />
            {width <= 768 && (
                <SortIcon />
            )}
            <NormalIcon
                icon={faRedoAlt}
                name="RESET"
                fontSize="1.3rem"
                action={resetArrayAction}
            />
            <ThemeIcon />
        </div>
    );
};

export default SettingsBar;
