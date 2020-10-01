import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M24.847 23.375l-7.262-7.263a9.845 9.845 0 002.207-6.216C19.792 4.439 15.352 0 9.896 0 4.439 0 0 4.44 0 9.896s4.44 9.896 9.896 9.896c2.354 0 4.516-.83 6.216-2.207l7.263 7.262a.521.521 0 00.736 0l.736-.736a.52.52 0 000-.736zM9.896 17.708c-4.308 0-7.813-3.504-7.813-7.812s3.505-7.813 7.813-7.813 7.812 3.505 7.812 7.813-3.504 7.812-7.812 7.812z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
