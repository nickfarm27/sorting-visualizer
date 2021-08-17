import React, { useEffect, useRef } from "react";
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
    const sliderRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (sliderRef.current)
            sliderRef.current.style.backgroundSize =
                ((props.value - props.min) * 100) / (props.max - props.min) +
                "% 100%";
    }, [props.value, props.min, props.max]);

    const rangeInputChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(props.action(Number(e.target.value)));
    };

    const numberInputChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(e.target.value);
        if (value < props.min) {
            dispatch(props.action(props.min));
        } else if (value > props.max) {
            dispatch(props.action(props.max));
        } else {
            dispatch(props.action(value));
        }
    };

    return (
        <div className={styles["slider-input"]}>
            <input
                ref={sliderRef}
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
