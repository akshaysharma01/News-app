import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M20.8 24.218H4.2a2.249 2.249 0 01-2.247-2.246V10.154a.781.781 0 011.563 0v11.818c0 .377.306.683.683.683h16.602a.684.684 0 00.683-.683V10.154a.781.781 0 111.563 0v11.818a2.249 2.249 0 01-2.246 2.246z" />
        <Path d="M24.219 12.889c-.2 0-.4-.077-.552-.23L13.95 2.945c-.8-.8-2.1-.8-2.9 0L1.334 12.66a.781.781 0 11-1.105-1.105l9.716-9.716a3.617 3.617 0 015.11 0l9.716 9.716a.781.781 0 01-.552 1.334zM15.625 24.218h-6.25a.781.781 0 01-.781-.781v-6.934a2.444 2.444 0 012.441-2.441h2.93a2.444 2.444 0 012.441 2.441v6.934c0 .431-.35.78-.781.78zm-5.469-1.563h4.688v-6.152a.88.88 0 00-.88-.879h-2.929a.88.88 0 00-.879.88v6.151z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h25v25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
