import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectionSort } from "../../../algorithms/selectionSort";
import { bubbleSort } from "../../../algorithms/bubbleSort";
import styles from "./Visualizer.module.scss";

interface Props {}

const Visualizer = (props: Props) => {
    const array = useAppSelector((state) => state.settings.array);
    const speed = useAppSelector((state) => state.settings.speed);
    const dispatch = useAppDispatch();

    const [num, setNum] = useState(0);

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
        dispatch(selectionSort(newArray, refs, speedRef));
    }

    async function increaseNumHandler() {
        for (let i = 0; i < 100; i++) {
            setNum((prevNum) => prevNum + 1);
            await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
        }
    }

    return (
        <div>
            <div className={styles.visualizer}>
                {array.map((value, index) => {
                    return (
                        <div 
                            className={styles.bars}
                            key={index}
                            style={{
                                width: "0.8vw",
                                height: `${value}vh`,
                            }}
                            ref={refs.current[index]}
                        ></div>
                    );
                })}
            </div>
            <button onClick={sortButtonHandler}>Sort</button>
            <h1>{num}</h1>
            <button onClick={increaseNumHandler}>Increase Num</button>
        </div>
    );
};

export default Visualizer;
