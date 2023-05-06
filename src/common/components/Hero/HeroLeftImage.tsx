import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroLeftImage = (props: Props) => {
  return (
    <div>
              {/* left image section  */}
      <div
        className={`left-image-section bg-blue-200 py-10 px-8 flex row-center rounded-border gap-5 bg-[url('/img/bg/bg.png')]`}
      >
        <div className="left-part">
          <Image src={right_img} height="362" width="419" alt="brand logo" />
        </div>
        <div className="right-part ">
          <Card css="w-[491px]">
            <Content />
            <button className="bg-gradiant flex row-center py-2 w-1/2 mt-8 rounded-[12px] text-light text-font-sm-btn">
              Criar conta grátis
            </button>
          </Card>
        </div>
      </div>
      {/* left image section end */}
    </div>
  )
}

export default HeroLeftImage