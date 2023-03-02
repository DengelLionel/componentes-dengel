import React from 'react'

const IconMenuOne = ({open},props:any) => {
  return (
    <svg
    onClick={open}
    width={43}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M6 6h31v31H6z" />
    <circle cx={21.5} cy={21.5} r={21.5} fill="#2247ED" fillOpacity={0.38} />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVR4nO3asQ3AIBAEQeyc/gulALsBZEfPITQTE7zY9FoDAAAAAAAA4FTX34MxxrPikFP13j//+F51CHMChAkQJkCYAGEChAkAAAAAAABQzC6omF3Q5gQIEyBMgDABwgQIEwAAAAAAAKCYXVAxu6DNCRAmQJgAYQKECRAmAAAAAAAAAAAUeQHGdwwui9ThvQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
  )
}

export default IconMenuOne