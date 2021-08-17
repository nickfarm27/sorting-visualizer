import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectionSort } from "../../../algorithms/selectionSort";
import { bubbleSort } from "../../../algorithms/bubbleSort";
import { BUBBLE_SORT, SELECTION_SORT } from "../../../store/constants";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { settingsActions } from "../../../store/settings-slice";
import styles from "./Visualizer.module.scss";

interface Props {}

const Visualizer = (props: Props) => {
    const array = useAppSelector((state) => state.settings.array);
    const speed = useAppSelector((state) => state.settings.speed);
    const algorithm = useAppSelector((state) => state.settings.chosenAlgorithm);
    const isSorting = useAppSelector((state) => state.settings.sorting);
    const isSortingRef = useRef(false);
    const dispatch = useAppDispatch();
    const { width } = useWindowDimensions();

    const speedRef = useRef(speed);
    speedRef.current = speed;

    const refs = useRef(
        [...new Array(array.length)].map(() =>
            React.createRef<HTMLDivElement>()
        )
    );

    useEffect(() => {
        for (let i = 0; i < array.length; i++) {
            refs.current[i] = refs.current[i] || React.createRef();
        }
    }, [array.length]);

    useEffect(() => {
        if (isSorting && !isSortingRef.current) {
            const newArray = [...array];
            switch (algorithm) {
                case BUBBLE_SORT:
                    dispatch(bubbleSort(newArray, refs, speedRef));
                    break;
                case SELECTION_SORT:
                    dispatch(selectionSort(newArray, refs, speedRef));
                    break;

                default:
                    break;
            }
            isSortingRef.current = true;
        } else if (!isSorting && isSortingRef.current) {
            isSortingRef.current = false;
        }
    }, [isSorting, array, algorithm, dispatch]);

    function sortButtonHandler() {
        dispatch(settingsActions.beginSorting());
    }

    const barWidth = array.length <= 20 ? "1.5vw" : "1vw";

    return (
        <>
            <div className={styles.visualizer}>
                {array.map((value, index) => {
                    return (
                        <div
                            className={styles.bars}
                            key={index}
                            style={{
                                width: barWidth,
                                height: `${(value / 50) * 95}%`,
                            }}
                            ref={refs.current[index]}
                        ></div>
                    );
                })}
            </div>
            {width > 768 && (
                <>
                    <button
                        className={styles["sort-button"]}
                        onClick={sortButtonHandler}
                        disabled={isSorting}
                    >
                        Sort
                    </button>
                    <p className={styles.footer}>
                        Made with ❤️ by Nicholas Farm
                    </p>
                </>
            )}
        </>
    );
};

export default Visualizer;
