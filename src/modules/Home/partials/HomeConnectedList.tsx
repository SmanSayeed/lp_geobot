import ConnectedList from '@components/ConnectedList/ConnectedList'
import Text from '@components/Text/Text'
import React from 'react'

type Props = {}

const HomeConnectedList = (props: Props) => {
  return (
    <div>
         {/* connected list  */}
      <div className="mt-20 mx-auto mb-10 lg:w-[37%] ">
        <div className="col-center gap-2 ">
          <Text
            text="Como gerar links WhatsApp em 3 passos"
            css="small-gradiant-title"
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