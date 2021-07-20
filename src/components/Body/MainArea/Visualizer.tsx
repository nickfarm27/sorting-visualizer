import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { settingsActions } from "../../../store/settings-slice";
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

    async function bubbleSort(array: Array<number>) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                const curBarToSwap1 = refs.current[j].current;
                const curBarToSwap2 = refs.current[j + 1].current;
                if (curBarToSwap1)
                    curBarToSwap1.style.backgroundColor = "green";
                if (curBarToSwap2)
                    curBarToSwap2.style.backgroundColor = "green";
                await new Promise((r) =>
                    setTimeout(r, 1000 - speedRef.current)
                );
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    dispatch(settingsActions.updateArray([...array]));
                    await new Promise((r) =>
                        setTimeout(r, 1000 - speedRef.current)
                    );
                }
                if (curBarToSwap1) curBarToSwap1.style.backgroundColor = "blue";
                if (curBarToSwap2) curBarToSwap2.style.backgroundColor = "blue";
            }
        }
        await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
    }

    function sortButtonHandler() {
        const newArray = [...array];
        bubbleSort(newArray);
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
                            key={index}
                            style={{
                                background: "blue",
                                width: "10px",
                                height: `${value}px`,
                                border: "solid black 1px",
                                transition: "all 100ms ease",
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
