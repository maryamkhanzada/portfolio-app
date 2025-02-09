import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
        <div className='ml-[10%] mt-16' >
            <Image src="/images/img31.webp" alt="my pic" width={300} height={300} className="rounded-full ml-[40%]"/>
            </div>
            <div>
            <h2 className='text-6xl  gap-y-2 text-left ml-[20%] font-bold text-cyan-600 mt-16'>Hello <br />  I am <br /> Maryam Khan</h2>
            <div className='ml-[20%] flex gap-14 mt-12'>
                <button className='text-xl p-3 border-2 border-cyan-600 rounded-2xl'><Link href="/about">About Me</Link></button>
                <button className='text-xl p-3 border-2 border-cyan-600 rounded-2xl'>Contact Me</button>
            </div>
            </div>

        </div>
    )
}

export default Hero