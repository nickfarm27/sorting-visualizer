import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../../../store/hooks";
import { faSortAmountUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Icon.module.scss";
import { settingsActions } from "../../../../store/settings-slice";

interface Props {}

const SortIcon = (props: Props) => {
    const dispatch = useAppDispatch();

    function sortButtonHandler() {
        dispatch(settingsActions.beginSorting());
    }

    return (
        <button className={styles.icon} onClick={sortButtonHandler}>
            <FontAwesomeIcon
                icon={faSortAmountUp}
                style={{ fontSize: "1.3rem" }}
            />
            <p className={styles.name}>SORT</p>
        </button>
    );
};

export default SortIcon;
