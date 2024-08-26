import React from 'react'

interface Props {
    children: React.ReactNode
}

const TechStack: React.FC<Props> = ({children}) => {
    return (
        <div>
            <h2 className='uppercase font-bold mb-3 md:mt-5 text-center'>tech stack</h2>
            <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                {children}
            </div>
        </div>
    )
}

export default TechStack
