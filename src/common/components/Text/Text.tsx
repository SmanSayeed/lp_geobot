import React from 'react'

type Props = {
    text:String,
    css:String
}

const Text = ({text,css}: Props) => {
  return (
    <div className={`${css}`}>{text}</div>
  )
}

export default Text