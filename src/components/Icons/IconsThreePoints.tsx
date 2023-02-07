import React from 'react'

const IconsThreePoints = ({open},props:any) => {
  return (
    
   <svg
   onClick={open}
   className="cursor-pointer"
   width={34}
   height={32}
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   {...props}
 >
   <path
     d="M17 18.667c1.565 0 2.833-1.194 2.833-2.667 0-1.473-1.268-2.667-2.833-2.667-1.565 0-2.833 1.194-2.833 2.667 0 1.473 1.268 2.667 2.833 2.667ZM26.917 18.667c1.564 0 2.833-1.194 2.833-2.667 0-1.473-1.268-2.667-2.833-2.667-1.565 0-2.834 1.194-2.834 2.667 0 1.473 1.269 2.667 2.834 2.667ZM7.083 18.667c1.565 0 2.834-1.194 2.834-2.667 0-1.473-1.269-2.667-2.834-2.667-1.564 0-2.833 1.194-2.833 2.667 0 1.473 1.269 2.667 2.833 2.667Z"
     fill="#BDC3FE"
   />
 </svg>
  )
}

export default IconsThreePoints