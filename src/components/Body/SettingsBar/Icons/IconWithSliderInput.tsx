import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import SliderInput from "./SliderInput";
import styles from "./Icon.module.scss";

interface Props {
    icon: IconDefinition;
    name: string;
    fontSize: string;
    min: number;
    max: number;
    value: number;
    action: ActionCreatorWithPayload<number, string>;
}

const IconWithSliderInput = (props: Props) => {
    const [displaySliderInput, setDisplaySliderInput] = useState(false);

    const toggleSliderInputHandler = () => {
        setDisplaySliderInput(true);
    };

    // const mouseOverHandler = () => {
    //     setDisplaySliderInput(true);
    // };

    // const mouseOutHandler = () => {
    //     setDisplaySliderInput(false);
    // };

    return (
        <button
            className={styles.icon}
            onClick={toggleSliderInputHandler}
            // onMouseOver={mouseOverHandler}
            // onMouseOut={mouseOutHandler}
        >
            <FontAwesomeIcon
                icon={props.icon}
                style={{ fontSize: props.fontSize }}
            />
            <p className={styles.name}>{props.name}</p>
            {displaySliderInput && (
                <SliderInput
                    class={styles["slider-input"]}
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    action={props.action}
                />
            )}
        </button>
    );
};

export default IconWithSliderInput;
