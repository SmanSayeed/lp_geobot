import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HomeLeftImage = (props: Props) => {
  return (
    <div>
              {/* left image section  */}
      <div
        className={`left-image-section bg-[url('/img/bg/bg.png')] bg-cover bg-center`}
      >
        <div className="left-part">
          <Image src={right_img} height={362} width={419} alt="brand logo" />
        </div>
        <div className="right-part lg:w-1/2">
          <Card css="">
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

export default HomeLeftImage