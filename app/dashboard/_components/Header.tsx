import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between items-center p-5 shadow-sm border-b-2 bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md  outline-none'>
            <Search/>
            <input type="text" placeholder='Search your content' className='outline-none w-full bg-transparent '/>
            
        <UserButton />
        </div>
        
    </div>
  )
}

export default Header
