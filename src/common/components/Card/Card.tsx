import React from 'react'
import { ReactNode } from 'react'

type Props = {
    css:String,
    children: ReactNode,
}

const Card = ({children,css}: Props) => {
  return (
    <div className={`${css}`}>{children}</div>
  )
}

export default Card