import { ThunkDispatch } from "@reduxjs/toolkit";
import { settingsActions } from "../store/settings-slice";
import styles from "../components/Body/MainArea/Visualizer.module.scss";

export const selectionSort = (
    array: Array<number>,
    refs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    speedRef: React.MutableRefObject<number>
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const n = array.length;

        dispatch(settingsActions.beginSorting());
        for (let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            let minRef = refs.current[min].current;
            const iRef = refs.current[i].current;

            if (iRef) iRef.classList.toggle(styles.min);

            for (let j = i + 1; j < n; j++) {
                const jRef = refs.current[j].current;

                if (jRef) jRef.classList.toggle(styles.swapping);

                await new Promise((r) =>
                    setTimeout(r, 1000 - speedRef.current)
                );

                if (array[j] < array[min]) {
                    if (minRef) minRef.classList.toggle(styles.min);

                    min = j;
                    minRef = refs.current[min].current;

                    if (minRef) minRef.classList.toggle(styles.min);

                    await new Promise((r) =>
                        setTimeout(r, 1000 - speedRef.current)
                    );
                }

                if (jRef) jRef.classList.toggle(styles.swapping);
            }
            if (min !== i) {
                // Swapping the elements
                let tmp = array[i];
                array[i] = array[min];
                array[min] = tmp;
            }

            if (minRef) minRef.classList.toggle(styles.min);

            dispatch(settingsActions.updateArray([...array]));
            
            if (iRef) {
                iRef.classList.toggle(styles.sorted);
            }
            await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
        }
        await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
        dispatch(settingsActions.endSorting());
    };
};
