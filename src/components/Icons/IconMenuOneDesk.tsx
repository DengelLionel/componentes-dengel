import React from 'react'

const IconMenuOneDesk = ({openMenuDesktop,open},props:any) => {
  return openMenuDesktop===true?(
    <svg
    onClick={open}
    width={23}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.86 11 6.538-6.254a1.906 1.906 0 0 0 0-2.78L20.945.576a2.122 2.122 0 0 0-2.906 0L11.5 6.83 4.961.576a2.122 2.122 0 0 0-2.906 0L.602 1.966a1.906 1.906 0 0 0 0 2.78L7.14 11 .602 17.254a1.906 1.906 0 0 0 0 2.78l1.453 1.39a2.122 2.122 0 0 0 2.906 0L11.5 15.17l6.539 6.254a2.122 2.122 0 0 0 2.906 0l1.453-1.39a1.906 1.906 0 0 0 0-2.78L15.86 11Z"
      fill="#F3F3F3"
    />
  </svg>
  ):(
<svg
onClick={open}
width={24}
height={21}
fill="none"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<path
  d="M.857 3.857h22.286A.857.857 0 0 0 24 3V.857A.857.857 0 0 0 23.143 0H.857A.857.857 0 0 0 0 .857V3c0 .473.384.857.857.857Zm0 8.572h22.286A.857.857 0 0 0 24 11.57V9.43a.857.857 0 0 0-.857-.858H.857A.857.857 0 0 0 0 9.43v2.142c0 .474.384.858.857.858Zm0 8.571h22.286a.857.857 0 0 0 .857-.857V18a.857.857 0 0 0-.857-.857H.857A.857.857 0 0 0 0 18v2.143c0 .473.384.857.857.857Z"
  fill="#F3F3F3"
/>
</svg>
  )
}

export default IconMenuOneDesk