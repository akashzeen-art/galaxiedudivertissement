import React from 'react'
import logo from '../../assets/profile-image.jpg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-4'>
      <div className="relative flex-1">
        <input type="text" name="search" id="search" className='bg-[rgba(255,255,255,0.08)]
      backdrop-blur-xl
      border border-white/20
      rounded-xl
      p-2 pl-10 text-white
      shadow-lg shadow-black/20
      outline-none w-1/2' placeholder='Search for films, directors or actors...' />
        <i className="ri-search-2-line absolute left-3 top-1/2 transform -translate-y-1/2"></i>
      </div>
      <div className='flex gap-2 justify-between items-center'>
        <div className="relative bg-[rgba(255,255,255,0.08)] px-2 py-1 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300">
          <i className="ri-notification-3-line text-xl"></i>
          <span className='bg-red-500 w-2 h-2 rounded-full absolute top-2 right-2'></span>
        </div>
        <div className="relative bg-[rgba(255,255,255,0.08)] rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-all duration-300 p-1">
          <div>
            <img src={logo} alt="Profile" className="rounded-full object-cover w-8 h-8 border hover:border-[rgba(255,255,255,0.15)] transition-all duration-300" />
          </div>
          <span className='bg-red-500 w-2 h-2 rounded-full absolute top-1 right-1'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
