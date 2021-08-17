import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import styles from "./Icon.module.scss";

interface Props {
    icon: IconDefinition;
    name: string;
    fontSize: string;
    action: ActionCreatorWithoutPayload<string>;
}

const NormalIcon = (props: Props) => {
    const isSorting = useAppSelector((state) => state.settings.sorting);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(props.action())
    }

    return (
        <button className={styles.icon} onClick={handleClick} disabled={isSorting}>
            <FontAwesomeIcon
                icon={props.icon}
                style={{ fontSize: props.fontSize }}
            />
            <p className={styles.name}>{props.name}</p>
        </button>
    )
}

export default NormalIcon
