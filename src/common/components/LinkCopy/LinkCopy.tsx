import Icon from '@components/Icon/Icon'
import Text from '@components/Text/Text'
import { CopyIcon } from '@libs/svg/CopyIcon'
import { handleCopyClick } from '@utils/copyToClipboard'
import React, { useEffect, useState } from 'react'

type Props = {
    link:string;
}



const LinkCopy = ({link}: Props) => {

const [copyStatus,setCopyStatus] = useState<string>("");

  const clickToCopy = (link:string) => {
       const isCopied =  handleCopyClick(link) 
    //   if(copyStatus!=="" && isCopied===true) {
    //     console.log("copied ")
        setCopyStatus("Copied!")
    //   }
    }
useEffect(() => {
    copyStatus && setTimeout(() => {
        setCopyStatus("")
      }, 3000)
    
}, [copyStatus])


  return (
    <div className='my-5'>
        <div className='w-full p-3 text-font-sm text-neutro_dark_01 overflow-hidden bg-light rounded-md border-neutro_light_04 border-2'>
        {link}
        </div>
        <div className='flex gap-2 justify-start items-center'  >
            <Icon
            icon={CopyIcon}
            iconColor='fill-primary_blue'
            onClick={()=>clickToCopy(link)}
            css="cursor-pointer"
            />
            <Text
            text="Cópiar link completo"
            css="text-primary_blue text-font-md cursor-pointer"
            onClick={()=>clickToCopy(link)}
            />
            {
               copyStatus && <div className=' p-1 h-[20px] flex row-center rounded-lg text-font-sm bg-slate-600 text-light text-sm w-[100px]'>
                {copyStatus}
            </div>
            }
          
        </div>
        
    </div>
  )
}

export default LinkCopy