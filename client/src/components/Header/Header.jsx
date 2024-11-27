import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from "../../hooks/useLogout"
import { useAuthContext } from '../../context/AuthContect';

const Header = () => {
  const {loading, logout} = useLogout();
  const {authState} = useAuthContext();
  
  return (
    <div className='flex py-3 items-center mx-5'>
      <img src='./logo.png' alt="logo"  width={'30px'} className='rounded-full me-2'/>
        <h4 className='font-bold'>Chat app</h4>
        <div className='flex gap-3 ms-auto items-center justify-center'>
          <h5>{authState.username}</h5>
          <img src={authState.profilePic} alt="profile" width={'30px'}></img>
          <LogoutIcon onClick={logout} alt="exit" className="cursor-pointer " />
        </div>
    </div>
  )
}

export default Header