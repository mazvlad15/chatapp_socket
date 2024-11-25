import React from 'react'
import Search from './Search'
import User from './User'

const Users = () => {
  return (
    <div className='mt-4 p-2 me-4'>
        <div className='search border-b'>
            <Search />
        </div>
        <div className='users overflow-auto max-h-[400px] mt-5'> {/* Max height + overflow */}
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
    </div>
  )
}

export default Users