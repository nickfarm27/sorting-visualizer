import React from "react";
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
    return (
        <div className={styles.icon}>
            <FontAwesomeIcon
                icon={props.icon}
                style={{ fontSize: props.fontSize }}
            />
            <p className={styles.name}>{props.name}</p>
            <SliderInput
                class={styles["slider-input"]}
                min={props.min}
                max={props.max}
                value={props.value}
                action={props.action}
            />
        </div>
    );
};

export default IconWithSliderInput;
