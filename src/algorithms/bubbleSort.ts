import { ThunkDispatch } from "@reduxjs/toolkit";
import { settingsActions } from "../store/settings-slice";
import styles from "../components/Body/MainArea/Visualizer.module.scss"

export const bubbleSort = (
    array: Array<number>,
    refs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
    speedRef: React.MutableRefObject<number>
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                const curBarToSwap1 = refs.current[j].current;
                const curBarToSwap2 = refs.current[j + 1].current;
                if (curBarToSwap1 && curBarToSwap2) {
                    curBarToSwap1.classList.toggle(styles.swapping);
                    curBarToSwap2.classList.toggle(styles.swapping);
                }
                await new Promise((r) =>
                    setTimeout(r, 1000 - speedRef.current)
                );
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    dispatch(settingsActions.updateArray([...array]));
                    await new Promise((r) =>
                        setTimeout(r, 1000 - speedRef.current)
                    );
                }
                if (curBarToSwap1 && curBarToSwap2) {
                    curBarToSwap1.classList.toggle(styles.swapping);
                    curBarToSwap2.classList.toggle(styles.swapping);
                }
            }
            if (refs.current[array.length-i-1].current)
                refs.current[array.length-i-1].current?.classList.toggle(styles.sorted);
        }
        await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
        for (let i = 0; i < array.length; i++) {
            if (refs.current[i].current)
                refs.current[i].current?.classList.toggle(styles.sorted);
            await new Promise((r) => setTimeout(r, 1000 - speedRef.current));
        }
    };
};
