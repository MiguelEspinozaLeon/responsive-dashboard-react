import React from 'react'
import { TextInput } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
    <div id='top' className='relative w-full sm:flex justify-between items-center p-2 '>
        <h1 className='font-bold text-gray-300'>Dashboard</h1>
        <div className='py-2'>
            <TextInput icon={MagnifyingGlassIcon} placeholder='Search...'/>
        </div>
    </div>
  )
}

export default NavBar