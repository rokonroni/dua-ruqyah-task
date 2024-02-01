import React from 'react'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div className='flex  max-h-screen min-w-full'>
      <aside className='overflow-y-scroll'>
        <Sidebar />
      </aside>
      <section className=' bg-green-100'>

      </section>
      <section className=' bg-blue-100 '></section>
    </div>
  )
}

