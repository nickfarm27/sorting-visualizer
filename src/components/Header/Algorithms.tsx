import React from "react";
import { ALGORITHMS } from "../../store/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { settingsActions } from "../../store/settings-slice";
import styles from "./Algorithms.module.scss";

interface Props {}

const Algorithms = (props: Props) => {
    const chosenAlgorithm = useAppSelector(
        (state) => state.settings.chosenAlgorithm
    );
    const dispatch = useAppDispatch();

    const changeAlgorithmHandler = (e: React.MouseEvent) => {
        console.log(e.currentTarget.innerHTML);
        if (e.currentTarget.textContent)
            dispatch(
                settingsActions.changeAlgorithm(e.currentTarget.textContent)
            );
    };

    return (
        <div className={styles.algorithms}>
            {ALGORITHMS.map((algorithm) => {
                return (
                    <button
                        key={algorithm}
                        onClick={changeAlgorithmHandler}
                        className={
                            chosenAlgorithm === algorithm ? styles.chosen : undefined
                        }
                    >
                        {algorithm}
                    </button>
                );
            })}
        </div>
    );
};

export default Algorithms;
