import React from 'react'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div className='flex min-w-full'>
      <aside>
        <Sidebar />
      </aside>
      <section className=' bg-green-100 min-w-'></section>
      <section className=' bg-blue-100 min-w-96'></section>
    </div>
  )
}

