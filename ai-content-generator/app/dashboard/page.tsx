"use client";
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import Template from './_components/Template'

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
        <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
        <Template userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
