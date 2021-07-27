import React, { useState, useRef, useEffect } from "react";
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
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setDisplaySliderInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleSliderInputHandler = (e: React.MouseEvent) => {
        setDisplaySliderInput((prevValue) => !prevValue);
    };

    return (
        <div ref={ref} className={styles["icon-container"]}>
            <button
                className={styles.icon}
                onClick={toggleSliderInputHandler}
            >
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{ fontSize: props.fontSize }}
                />
                <p className={styles.name}>{props.name}</p>
            </button>
            {displaySliderInput && (
                <SliderInput
                    class={styles["slider-input"]}
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    action={props.action}
                />
            )}
        </div>
    );
};

export default IconWithSliderInput;
