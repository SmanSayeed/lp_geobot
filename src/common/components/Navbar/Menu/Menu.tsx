import React from 'react'

type Props = {
    title:String;
}

const Menu = ({title}: Props) => {
  return (
    <div className=''>
        {title}
    </div>
  )
}

export default Menu