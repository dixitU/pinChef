

import * as React from "react";
import Svg, { Circle, Rect, Path, Ellipse, Defs, Stop, RadialGradient, G} from 'react-native-svg';

export default function IncorrectPin () {
    return(
        <Svg  width="60" height="60" viewBox="0 0 60 60">
          <Path id="incorrect_pin_icon" data-name="incorrect pin icon" d="M33,3A30,30,0,1,0,63,33,30.011,30.011,0,0,0,33,3Zm3,45a4.562,4.562,0,0,1-6,0,4.563,4.563,0,0,1,0-6,4.563,4.563,0,0,1,6,0A4.563,4.563,0,0,1,36,48Zm0-12s-1.5,2.39-3,2.39S30,36,30,36s-1.5-13.5,0-18c.654-1.962.9-3.413,2.876-3.37S35.154,15.462,36,18C37.5,22.5,36,36,36,36Z" transform="translate(-3 -3)" fill="#d62929"/>
        </Svg>
    )
}