import React from 'react'
import Avatar from 'react-avatar'

const Tweet = () => {
  return (
    <div>
      <div>
      <div className='flex p'>
              <Avatar
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                size="40"
                round={true}
              />
              <div className='ml-2'>
              <div className='flex items-center'>
                <h1 className='font-bold'>Patel</h1>
                <p className='text-gray-500 text-sm ml-1'>@patelmernstack . 1m</p>
              </div>
              <div>
                <p>Hello developers lets connect and grow together.</p>
              </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Tweet