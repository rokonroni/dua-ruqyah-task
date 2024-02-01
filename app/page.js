import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className='flex max-h-screen'>
      <aside className='overflow-y-scroll overflow-x-hidden'>
        <Sidebar />
      </aside>
        <nav className=" w-full h-fit ">
          <Navbar />
        </nav>
        
    </div>
  )
}

