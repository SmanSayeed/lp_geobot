import Text from '@components/Text/Text'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-black-200'>
    <div className="container flex justify-between py-8">
      <Text text="Politica de Privacidade" css="not-italic font-medium text-sm underline"/>
      <Text text="Termos e condições de uso" css="not-italic font-medium text-sm underline"/>
      <Text text="Gerador de link do WhatsApp" css="not-italic font-medium text-sm "/>
      <Text text="Chatbot grátis WhatsApp" css="not-italic font-medium text-sm "/>
    </div>
  
  </div>
  )
}

export default Footer