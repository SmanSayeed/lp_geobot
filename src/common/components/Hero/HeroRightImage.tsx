import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { left_img, right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'


type Props = {}

const HeroRightImage = (props: Props) => {
  return (
    <div>
        
      {/* RIGHT image section  */}
      <div className="left-image-section my-10 py-10 px-8 flex justify-center  rounded-border gap-10">
        <div className="left-part ">
          <Card css="w-[450px]">
            <Content />
            <Content />
          </Card>
        </div>
        <div className="right-part">
          <Image src={left_img} height="362" width="419" alt="brand logo" />
        </div>
      </div>
      {/* right image section end */}
    </div>
  )
}

export default HeroRightImage