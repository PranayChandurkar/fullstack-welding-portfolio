import React from 'react'
import Nav from './Nav'
import bg from '../assets/bg.jpg'

const Header = () => {
  return (
    <div>
        <Nav />
        <div className="relative h-[60vh] min-h-[400px] w-full bg-zinc-900 md:h-[85vh]">
            <img className="absolute inset-0 object-cover h-full w-full" src={bg} alt="Welding Background" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-900/60 to-zinc-950"></div>
            
            <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10 pt-16">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                    Premium Iron & <br className="hidden md:block"/> Welding Solutions
                </h1>
                <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md">
                    Expert craftsmanship in Iron Doors, Windows, Stairs, and Shades. Built for strength, designed for elegance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                        Explore Our Services
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-1">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header