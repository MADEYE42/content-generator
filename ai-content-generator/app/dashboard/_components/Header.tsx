import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between items-center p-5 shadow-sm border-b-2 bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md  outline-none'>
            <Search/>
            <input type="text" placeholder='Search your content' className='outline-none w-full bg-transparent '/>
        </div>
        <div>
            <h2 className='bg-primary p-3 rounded-full text-xs text-white px-2'>😎 Chill out its free</h2>
        </div>
    </div>
  )
}

export default Header
