import Brand from '@components/Brand/Brand'
import Button from '@components/Button/Button'
import React from 'react'

const Header = () => {
  return (
    <div className='shadow-[0px_4px_8px_rgba(1,6,49,0.04)]'>
      <div className="container flex justify-between py-8">   
      <Brand/>
      <Button>Criar Conta</Button>
      </div>
    
    </div>
  )     
}

export default Header