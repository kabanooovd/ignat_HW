import React, {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
} from "react";
import './SuperDoubleRange.css'

interface MultiRangeSliderProps {
    min: number;
    max: number;
    value1: number
    value2: number
    setValue1: (value1: number) => void
    setValue2: (value2: number) => void
}

const SuperDoubleRange: FC<MultiRangeSliderProps> = ({
                                                         min,
                                                         max,
                                                         value1,
                                                         value2,
                                                         setValue1,
                                                         setValue2,
                                                     }) => {

    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(value1);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value1, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(value2);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value2, getPercent]);

    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={value1}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(Number(event.target.value), value2 - 1);
                    setValue1(value);
                    minValRef.current = value;
                    //const minvalue = Math.min(Number(event.target.value), maxVal - 1);
                }}
                className="thumb thumb--left"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value2}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(Number(event.target.value), value1 + 1);
                    setValue2(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />
            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
            </div>
        </div>
    );
};

export default SuperDoubleRange;


































//
//
// import React, {
//     ChangeEvent,
//     FC,
//     useCallback,
//     useEffect,
//     useState,
//     useRef,
// } from "react";
// import './SuperDoubleRange.css'
//
// interface MultiRangeSliderProps {
//     min: number;
//     max: number;
//     //setValue2: (MaxVal: number) => void
// }
//
// const SuperDoubleRange: FC<MultiRangeSliderProps> = ({
//                                                          min,
//                                                          max,
//                                                          //setValue2
//                                                      }) => {
//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef<HTMLDivElement>(null);
//
//     // Convert to percentage
//     const getPercent = useCallback(
//         (value: number) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );
//
//     // Set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);
//
//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);
//
//     // Set width of the range to decrease from the right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);
//
//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);
//
//     // Get min and max values when their state changes
//     /*useEffect(() => {
//         onChange({ min: minVal, max: maxVal });
//     }, [minVal, maxVal, onChange]);*/
//
//     return (
//         <div className="container">
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={minVal}
//                 onChange={(event: ChangeEvent<HTMLInputElement>) => {
//                     const value = Math.min(Number(event.target.value), maxVal - 1);
//                     setMinVal(value);
//                     minValRef.current = value;
//                     //const minvalue = Math.min(Number(event.target.value), maxVal - 1);
//                 }}
//                 className="thumb thumb--left"
//                 /*style={{ zIndex: minVal > max - 100 && "5" }}*/
//             />
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={maxVal}
//                 onChange={(event: ChangeEvent<HTMLInputElement>) => {
//                     const value = Math.max(Number(event.target.value), minVal + 1);
//                     setMaxVal(value);
//                     maxValRef.current = value;
//                 }}
//                 className="thumb thumb--right"
//             />
//
//             <div className="slider">
//                 <div className="slider__track"></div>
//                 <div ref={range} className="slider__range"></div>
//                 <div className="slider__left-value">{minVal}</div>
//                 <div className="slider__right-value">{maxVal}</div>
//             </div>
//         </div>
//     );
// };
//
// export default SuperDoubleRange;
