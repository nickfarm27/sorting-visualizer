import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ALGORITHMS } from "../../store/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { settingsActions } from "../../store/settings-slice";
import styles from "./AlgorithmsDropdown.module.scss";

interface Props {}

const AlgorithmsDropdown = (props: Props) => {
    const chosenAlgorithm = useAppSelector(
        (state) => state.settings.chosenAlgorithm
    );
    const dispatch = useAppDispatch();

    const changeAlgorithmHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            settingsActions.changeAlgorithm(e.target.value)
        );
    }

    return (
        <div className={styles["select-container"]}>
            <select value={chosenAlgorithm} onChange={changeAlgorithmHandler} className={styles.select}>
                {ALGORITHMS.map((algorithm) => {
                    return (
                        <option
                            key={algorithm}
                            value={algorithm}
                            className={styles.option}
                        >
                            {algorithm}
                        </option>
                    );
                })}
            </select>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </div>
    );
};

export default AlgorithmsDropdown;
