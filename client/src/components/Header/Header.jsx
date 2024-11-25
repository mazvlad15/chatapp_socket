import React from 'react'

const Header = () => {
  return (
    <div className='flex py-3 items-center mx-5'>
      <img src='./logo.png' alt="logo"  width={'30px'} className='rounded-full me-2'/>
        <h4 className='font-bold'>Chat app</h4>
        <div className='flex gap-3 ms-auto items-center justify-center'>
          <h5>vladmazureac</h5>
          <img src='https://avatar.iran.liara.run/username' alt="profile" width={'30px'}></img>
        </div>
    </div>
  )
}

export default Header