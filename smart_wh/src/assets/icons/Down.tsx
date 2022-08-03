import * as React from "react"
import { SVGProps } from "react"

const Down = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.875 2.688 21.937.75 12 10.688 2.062.75.125 2.688 12 14.5 23.875 2.687Z"
      fill="#fff"
    />
  </svg>
)

export default Down
