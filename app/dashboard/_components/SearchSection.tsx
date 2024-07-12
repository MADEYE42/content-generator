
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-b from-black via-slate-500 to-slate-300 flex flex-col justify-center text-center items-center text-white'>
        <h2 className='text-3xl '>Browse the <span className='font-bold'>Templates</span>  you need.</h2>
        <p>Lets dive into creative minds. </p>
        <div className=' w-full flex justify-center items-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md mt-2 bg-white text-primary w-[50%]'>
                <Search/>
                <input type="text" placeholder='Search' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection
