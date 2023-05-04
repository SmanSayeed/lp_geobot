import Card from '@components/Card/Card'
import Text from '@components/Text/Text'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-red-200 '>
      <div className="py-20 col-center ">
      <Text
      text="Gerador de link para WhatsApp"
      css="text-font-xl gradiant-text"
      />
      <Text
      text="O melhor gerador de link WhatsApp encurtado, gere links para WhatsApp curto grátis."
      css=" text-font-sm text-neutro_dark_02"
      />
      <Card
      css="card card-gradiant container row-center gap-10 "
      >
        <div>
          <Text text="" css="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, repudiandae! Suscipit ullam consectetur, dolorem soluta alias officia ut veritatis. A itaque aut tempore in reprehenderit atque consequuntur voluptatibus, fuga fugiat?
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, repudiandae! Suscipit ullam consectetur, dolorem soluta alias officia ut veritatis. A itaque aut tempore in reprehenderit atque consequuntur voluptatibus, fuga fugiat?
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, repudiandae! Suscipit ullam consectetur, dolorem soluta alias officia ut veritatis. A itaque aut tempore in reprehenderit atque consequuntur voluptatibus, fuga fugiat?
        </div>
      </Card>
      </div>

    </div>
  )
}

export default Hero