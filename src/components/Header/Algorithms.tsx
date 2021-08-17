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
    const isSorting = useAppSelector((state) => state.settings.sorting)
    const dispatch = useAppDispatch();

    const changeAlgorithmHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(
            settingsActions.changeAlgorithm(e.currentTarget.value)
        );
    };

    return (
        <div className={styles.algorithms}>
            {ALGORITHMS.map((algorithm) => {
                return (
                    <button
                        key={algorithm}
                        value={algorithm}
                        onClick={changeAlgorithmHandler}
                        className={
                            chosenAlgorithm === algorithm ? styles.chosen : undefined
                        }
                        disabled={isSorting}
                    >
                        {algorithm}
                    </button>
                );
            })}
        </div>
    );
};

export default Algorithms;
