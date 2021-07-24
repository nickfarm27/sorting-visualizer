import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectionSort } from "../../../algorithms/selectionSort";
import { bubbleSort } from "../../../algorithms/bubbleSort";
import { BUBBLE_SORT, SELECTION_SORT } from "../../../store/constants";
import styles from "./Visualizer.module.scss";

interface Props {}

const Visualizer = (props: Props) => {
    const array = useAppSelector((state) => state.settings.array);
    const speed = useAppSelector((state) => state.settings.speed);
    const algorithm = useAppSelector((state) => state.settings.chosenAlgorithm);
    const dispatch = useAppDispatch();

    const speedRef = useRef(speed);
    speedRef.current = speed;

    const refs = useRef(
        [...new Array(array.length)].map(() => React.createRef<HTMLDivElement>())
    );

    useEffect(() => {
        for (let i = 0; i< array.length; i++) {
            refs.current[i] = refs.current[i] || React.createRef();
        }
    }, [array.length]);

    function sortButtonHandler() {
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
    }

    return (
        <>
            <div className={styles.visualizer}>
                {array.map((value, index) => {
                    return (
                        <div 
                            className={styles.bars}
                            key={index}
                            style={{
                                width: "20px",
                                height: `${(value/50)*95}%`,
                            }}
                            ref={refs.current[index]}
                        ></div>
                    );
                })}
            </div>
            <button className={styles["sort-button"]} onClick={sortButtonHandler}>Sort</button>
            <p className={styles.footer}>Made with ❤️ by Nicholas Farm</p>
        </>
    );
};

export default Visualizer;
