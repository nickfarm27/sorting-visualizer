import React, { useEffect, useRef, useState } from "react";
import styles from "./Visualizer.module.scss";

const randomArray = (length: number, min: number, max: number) =>
    [...new Array(length)].map(() =>
        Math.round(Math.random() * (max - min) + min)
    );
//? if you want intervals of 5
// [...new Array(length)].map(() => Math.ceil((Math.random() * (max - min) + min)/5)*5);

interface Props {}

const Visualizer = (props: Props) => {
    const [array, setArray] = useState(randomArray(50, 100, 500));
    const [num, setNum] = useState(0);
    const [speed, setSpeed] = useState(501);
    const speedRef = useRef(speed);
    speedRef.current = speed;

    async function bubbleSort(array: Array<number>) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    setArray(() => [...array]);
                    await new Promise((r) => setTimeout(r, 100));
                }
            }
        }
        return array;
    }

    function sortButtonHandler() {
        const newArray = [...array];
        bubbleSort(newArray);
        // setTimeout(() => {
        //     setArray(newArray);
        // }, 1000)
    }

    async function increaseNumHandler() {
        for (let i = 0; i < 100; i++) {
            setNum((prevNum) => prevNum + 1);
            await new Promise((r) => setTimeout(r, speedRef.current));
        }
    }

    function decreaseSpeedHandler() {
        if (speed > 250) {
            setSpeed((prevSpeed) => prevSpeed - 250);
        }
    }

    function increaseSpeedHandler() {
        setSpeed((prevSpeed) => prevSpeed + 500);
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
                        ></div>
                    );
                })}
            </div>
            <button onClick={sortButtonHandler}>Sort</button>
            <h1>{num}</h1>
            <button onClick={increaseNumHandler}>Increase Num</button>
            <button onClick={decreaseSpeedHandler}>Decrease Speed</button>
            <button onClick={increaseSpeedHandler}>Increase Speed</button>
        </div>
    );
};

export default Visualizer;
