import React,{memo} from 'react'

const IconMenuTwo = ({open},props:any) => {
  return (
<svg
onClick={open}
width={40}
height={40}
fill="none"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<circle cx={20} cy={20} r={20} fill="#000814" fillOpacity={0.53} />
<path
  d="m29.885 26.038-16.606-.191c-.353-.004-.641.375-.644.848l-.022 3.42c-.003.472.28.858.633.862l16.606.19c.353.005.641-.375.644-.847l.022-3.42c.003-.473-.28-.858-.633-.862ZM10.75 21.541l16.607.191c.352.004.64-.375.644-.848l.022-3.42c.003-.472-.28-.858-.634-.862l-16.606-.19c-.353-.005-.64.375-.644.847l-.022 3.42c-.003.473.28.858.633.862Zm2.616-9.375 16.606.19c.353.005.64-.375.644-.847l.022-3.42c.003-.473-.28-.859-.633-.863l-16.607-.19c-.352-.004-.64.375-.644.847l-.022 3.42c-.003.473.28.859.633.863Z"
  fill="#FAFAFA"
/>
</svg>
  )
}

export default memo(IconMenuTwo)