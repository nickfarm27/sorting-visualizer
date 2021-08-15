import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../store/hooks";
import styles from "./SliderInput.module.scss";

interface Props {
    min: number;
    max: number;
    value: number;
    action: ActionCreatorWithPayload<number, string>;
}

const SliderInput = (props: Props) => {
    const dispatch = useAppDispatch();

    const rangeInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(props.action(Number(e.currentTarget.value)));
    };
    const numberInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (value < props.min) {
            dispatch(props.action(props.min));
        } else if (value > props.max) {
            dispatch(props.action(props.max));
        } else {
            dispatch(props.action(value));
        }
        console.log(value);
    };

    return (
        <div className={styles["slider-input"]}>
            <input
                type="range"
                min={props.min}
                max={props.max}
                onChange={rangeInputChangeHandler}
                value={props.value}
            />
            <input
                type="number"
                min={props.min}
                max={props.max}
                onChange={numberInputChangeHandler}
                value={props.value}
            />
        </div>
    );
};

export default SliderInput;
