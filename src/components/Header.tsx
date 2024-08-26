import React from 'react'
import { getImageUrl } from "@/utility"

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-6 border-lime-300 border-b">
            <img src={getImageUrl("cv-image.png")} alt="immagine cv" className='max-w-[220px] hidden sm:inline-block'/>
            <div className="uppercase text-6xl text-center sm:text-right tracking-wider mx-auto sm:m-0">
                <div>
                    <div className='font-thin mb-2'>marilisa <span className='font-normal'>moio</span></div>
                    <div className='font-thin text-2xl'>jr. fullstack developer</div>
                </div>
            </div>
        </header>
    )
}

export default Header
