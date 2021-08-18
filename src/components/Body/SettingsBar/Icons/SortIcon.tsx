import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { settingsActions } from "../../../../store/settings-slice";
import styles from "./Icon.module.scss";

interface Props {}

const SortIcon = (props: Props) => {
    const isSorting = useAppSelector((state) => state.settings.sorting)
    const dispatch = useAppDispatch();

    function sortButtonHandler() {
        dispatch(settingsActions.beginSorting());
    }

    return (
        <button className={`${styles.icon} ${styles["sort-button"]}`} onClick={sortButtonHandler} disabled={isSorting}>
            <FontAwesomeIcon
                icon={faSortAmountDownAlt}
                style={{ fontSize: "1.2rem", transform: "rotateZ(-90deg)" }}
            />
            <p className={styles.name}>SORT</p>
        </button>
    );
};

export default SortIcon;
