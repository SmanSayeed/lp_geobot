import React from 'react'
import { FC } from "react";
type Props = {
    text:String;
    css:String;
    onClick?: () => any;
}

const Text:FC<Props> = ({onClick = () => {},text,css}: Props) => {
  return (
    <div className={`${css}`} onClick={onClick}>{text}</div>
  )
}

export default Text