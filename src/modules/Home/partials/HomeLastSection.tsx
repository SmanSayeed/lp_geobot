import Card from '@components/Card/Card'
import Text from '@components/Text/Text'
import React from 'react'

type Props = {}

const HomeLastSection = (props: Props) => {
  return (
    <div>
            {/* last gradiant section  */}
      <div className="">
        <div className="py-20 col-center ">
          <Card css="px-2 py-12 bg-gradiant flex justify-center items-stretch gap-5">
            <div className="self-end hidden lg:flex flex-col">
              <div className="message message_left_top w-[90px] ">
                <Text text="Seu Geobot" css="text-left text-secondry_purple font-[600]  text-[10px]" />
                <div className="h_line w-[58px]"></div>
              </div>          
              <div className="message ">
                <div className="h_line w-[115px] my-1"></div>
                <div className="h_line w-[115px] my-1"></div>
                <div className="h_line w-[60px] my-1"></div>
              </div>

            </div>
            <div className="flex col-center gap-3 lg:w-1/2">
              <Text
                text="Impulsione seu negócio com nosso gerador gratuito"
                css="text-font-md text-[24px] text-light text-center w-2/3"
              />

              <Text
                text="Com o gerador de botão flutuante do Geobot, integre o botão do WhatsApp ao seu site e impulsione seu negócio! Experimente agora mesmo."
                css="text-font-sm text-light text-center w-3/4"
              />
              <button className="text-primary_blue bg-light flex row-center px-10 py-2 mt-10 rounded-border text-font-sm-btn">
                Cadastre-se grátis
              </button>
            </div>
            <div className="flex flex-col items-end hidden lg:flex">
              {/* <Image
                src={message_right}
                height="100"
                width="250"
                alt="brand logo"
              /> */}
               <div className="message message_right_top w-[90px] ">
                <Text text="Cliente" css="text-left text-secondry_purple font-[600] text-[10px]" />
                <div className="h_line w-[58px]"></div>
              </div>          
              <div className="message ">
                <div className="h_line w-[115px] my-1"></div>
                <div className="h_line w-[115px] my-1"></div>
                <div className="h_line w-[60px] my-1"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* last gradinant section end  */}
    </div>
  )
}

export default HomeLastSection