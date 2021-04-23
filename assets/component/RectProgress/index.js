import React from 'react'
import Svg, { Circle } from 'react-native-svg'

export default RectProgress = ({ r = 5, val = 0 }) => {
    const c = 2 * 3.14 * r

    if (val < 0) { val = 0; }
    if (val > 100) { val = 100; }

    const res = c - (c / 100) * val

    return (
        <Svg
            style={{ position: 'absolute' }}
            width="100%"
            height="100%"
            viewBox="0 0 14 14">
            <Circle
                r={r}
                cx="50%"
                cy="50%"
                fill="transparent"
                stroke="#00000073"
                strokeDasharray={c}
                strokeDashoffset={res}
                strokeWidth="10" />
        </Svg>
    )
}