import Form from '@components/Form/Form'
import Text from '@components/Text/Text'
import React from 'react'

type Props = {}

const HomeTop = (props: Props) => {
  return (
    <div className="">
        <div className="py-20 col-center gap-3">
          <Text
            text="Gerador de link para WhatsApp"
            css="title-gradiant text-font-xl"
          />
          <Text
            text="O melhor gerador de link WhatsApp encurtado, gere links para WhatsApp curto grátis."
            css="text-font-sm text-neutro_dark_02 w-[90%] lg:w-[40%] text-center font-[400] leading-6"
          />

          <Form />
        </div>
      </div>
  )
}

export default HomeTop