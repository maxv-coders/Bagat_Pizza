import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='bg-orange-400 '>
            <div className="container">
                <div className='text-center justify-center py-8 flex gap-10'>
                    <Link to="/" className="text-[25px] font-bold text-white">Menu</Link>
                    <Link to="/process" className="text-[25px] font-bold text-white">Process</Link>
                </div>
                <div className=''>
                    
                </div>
            </div>
        </div>
    )
}
