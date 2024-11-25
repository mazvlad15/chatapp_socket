import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

const WriteMessage = () => {
  return (
    <div className='p-2 mx-3'>
        <label className="input input-ghost flex items-center ">
            <AttachFileIcon className='me-2 cursor-pointer'/>
        <input type="text" className="grow" placeholder="Type here..." />
            <SentimentSatisfiedAltIcon className='cursor-pointer'/>
            <SendIcon className='ms-3  cursor-pointer hover:-rotate-45 ease-in '/>
      </label>
    </div>
  )
}

export default WriteMessage