import Card from '@components/Card/Card'
import Content from '@components/Content/Content'
import { left_img, right_img } from '@config/constants'
import Image from 'next/image'
import React from 'react'
import Text from "@components/Text";

type Props = {}

const HomeRightImage = (props: Props) => {
  return (
    <>
        
      {/* RIGHT image section  */}
      <div className="left-image-section px-0 items-start justify-between ">
        <div className="left-part lg:w-[50%]  ">
          <Card css="">
            {/* first para  */}
            <Text
        text="Porque usar um gerador de link WhatsApp?"
        css="small-gradiant-title font-700 text-left mb-2"
      />

      <Text
        text="O WhatsApp, por meio de suas tecnologias, permite que você gere quantos links desejar, o que traz infinitas vantagens, incluindo a possibilidade de criar links personalizados.  "
        css="text-font-sm text-neutro_dark_02"
      />
    <br/>
         <Text
        text="Uma das principais vantagens é a capacidade de segmentar seus links, personalizando uma mensagem para cada um. "
        css="text-font-sm text-neutro_dark_02"
      />
       <br/>
         <Text
        text="Dessa forma, você pode saber de onde a pessoa está vindo e qual assunto ela deseja tratar, tornando a comunicação mais eficiente e evitando perda de tempo."
        css="text-font-sm text-neutro_dark_02"
      />
      <br/>
      <br/>
      <br/>
            {/* second para  */}
            <Text
        text="Qual o melhor gerador de link WhatsApp?"
        css="small-gradiant-title font-700 text-left mb-2"
      />

      <Text
        text="O melhor gerador de link é aquele que atende às suas necessidades de forma profissional e rápida. Apesar de existirem dezenas de geradores de link do WhatsApp, nem todos possuem tecnologias avançadas voltadas para o resultado do seu negócio."
        css="text-font-sm text-neutro_dark_02"
      />
    <br/>
         <Text
        text="O Gerador de link WhatsApp da Geobot se destaca pela sua interface simples, intuitiva e pelos recursos exclusivos que dificilmente você encontrará em outras plataformas. Por isso, é considerado um dos melhores geradores de link do mercado."
        css="text-font-sm text-neutro_dark_02"
      />

<br/>
         <Text
        text="A ferramenta Geobot é completa e oferece diversos recursos, incluindo um chatbot para WhatsApp. Se você tem um negócio online, não precisa apenas de um gerador de link, mas também de um sistema de atendimento no WhatsApp."
        css="text-font-sm text-neutro_dark_02"
      />

<br/>
         <Text
        text="Entre em contato com a Geobot para obter mais informações e potencialize o seu negócio com essa ferramenta indispensável."
        css="text-font-sm text-neutro_dark_02"
      />
          </Card>
        </div>
        <div className="lg:w-[42%]">
          <Image src={left_img} height="387" width="538" alt="brand logo" />
        </div>
      </div>
      {/* right image section end */}
    </>
  )
}

export default HomeRightImage