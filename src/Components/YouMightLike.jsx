import { Play, Star } from 'lucide-react'
import React from 'react'

const YouMightLike = ({ youMightLikeData }) => {
  return (
    <section>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl md:text-2xl font-bold text-white'>You Might Like</h2>
        <button className="text-white hover:text-white text-sm font-medium transition-colors bg-[#2c2638] backdrop-blur-md px-3 py-1 rounded border border-white/10">
          See All
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6'>
        {youMightLikeData.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden bg-[#20192b]/60 shadow-black/30 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/5"
          >
            <div className="relative aspect-square md:aspect-2/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 duration-300'>
                <div className='rounded-full bg-(--secondary-color) p-4 text-white flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-[#ac8dd4]/50 z-10'>
                  <Play className='w-6 h-6' fill='white' />
                </div>
              </div>

              <div className='absolute flex justify-between items-center gap-2 bottom-0 left-0 p-4 w-full'>
                <h3 className="text-white font-semibold text-base drop-shadow-lg line-clamp-1">{item.title}</h3>
                <div className="bg-(--secondary-color)/30 backdrop-blur-lg px-2 py-1 rounded-sm flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className={"text-white text-xs font-semibold"}>
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default YouMightLike
