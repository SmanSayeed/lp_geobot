import ConnectedList from '@components/ConnectedList/ConnectedList'
import Text from '@components/Text/Text'
import React from 'react'

type Props = {}

const HomeConnectedList = (props: Props) => {
  return (
    <div>
         {/* connected list  */}
      <div className="">
        <div className="py-10 col-center ">
          <Text
            text="Como gerar links WhatsApp em 3 passos"
            css="title-gradiant w-full lg:w-2/5 text-font-lg"
          />
          <Text
            text="Aprenda como gerar o seu link de WhatsApp em apenas 3 passos simples"
            css=" text-font-sm text-neutro_dark_02 text-center"
          />
        </div>
      </div>
      <div className="mx-auto w-full lg:w-1/2">
        <ConnectedList />
      </div>
      {/* connected list end  */}
    </div>
  )
}

export default HomeConnectedList