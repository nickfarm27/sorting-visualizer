import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./Icon.module.scss"

interface Props {
    icon: IconDefinition;
    name: string;
    fontSize: string;
}

const Icon = (props: Props) => {
    return (
        <div className={styles.icon}>
            <FontAwesomeIcon icon={props.icon} style={{fontSize: props.fontSize}} />
            <p className={styles.name}>{props.name}</p>
        </div>
    );
};

export default Icon;
