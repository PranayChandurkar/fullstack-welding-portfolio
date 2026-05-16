import React from 'react'
import { Link } from 'react-router-dom'
import { useContainer } from '../context/ContainerContext'

const FrontContainer = () => {
    const { container } = useContainer()
    return (
        <div className="bg-zinc-950 w-full py-20 px-6 md:px-20 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                    Discover our range of premium custom iron works, built to your exact specifications.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {container.map((item, key) => {
                    return (
                        <Link 
                            to={item.link} 
                            key={key}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-900/20 hover:-translate-y-2 block bg-zinc-900"
                        >
                            <div 
                                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                <div className="flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>View Details</span>
                                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FrontContainer