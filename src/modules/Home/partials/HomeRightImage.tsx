import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { left_img, right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'


type Props = {}

const HomeRightImage = (props: Props) => {
  return (
    <div>
        
      {/* RIGHT image section  */}
      <div className="left-image-section">
        <div className="left-part lg:w-[50%]  ">
          <Card css="">
            <Content />
            <Content />
          </Card>
        </div>
        <div className="right-part  ">
          <Image src={left_img} height="362" width="419" alt="brand logo" />
        </div>
      </div>
      {/* right image section end */}
    </div>
  )
}

export default HomeRightImage