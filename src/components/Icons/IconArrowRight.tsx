import React from 'react'

const IconArrowRight = (props:any) => {
  return (
    <svg
    width={8}
    className={props.className}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 12.355 4.945 7 0 1.645 1.522 0 8 7l-6.478 7L0 12.355Z"
      fill={props.fill}
    />
  </svg>
  )
}

export default IconArrowRight