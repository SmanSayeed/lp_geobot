import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'
import Text from "@components/Text";
type Props = {}



const HomeLeftImage = (props: Props) => {
  return (
    <>
              {/* left image section  */}
      <div
        className="left-image-section bg-[url('/img/bg/bg.png')] bg-cover bg-center mb-[6%]"
      >
        <div className="">
          <Image src={right_img} height={340} width={400} alt="brand logo" />
        </div>
        <div className="lg:w-1/2">
          <Card css=""> 
           
          <Text
        text="Acelere suas vendas com o Gerador de Links para WhatsApp Businness"
        css="small-gradiant-title font-700 text-left mb-2"
      />

      <Text
        text="Com o gerador de link do Geobot, encurte e rastreie links do WhatsApp com facilidade! Gere um link personalizado com uma mensagem personalizada e acompanhe suas estatísticas. "
        css="text-font-sm text-neutro_dark_02"
      />
    <br/>
         <Text
        text="Obtenha mais controle sobre onde e para quem seu link é gerado. Aumente a eficácia das suas comunicações pelo WhatsApp agora!"
        css="text-font-sm text-neutro_dark_02"
      />


            <button className="bg-gradiant flex row-center py-2 w-1/2 mt-8 rounded-[12px] text-light text-font-sm-btn">
              Criar conta grátis
            </button>
          </Card>
        </div>
      </div>
      {/* left image section end */}
    </>
  )
}

export default HomeLeftImage