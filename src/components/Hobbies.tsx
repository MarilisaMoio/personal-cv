import React from 'react'

interface Props{
    children: React.ReactNode
}

const Hobbies: React.FC<Props> = ({children}) => {
    return (
        <div>
            <h2 className='uppercase font-bold mb-1 md:mt-5 text-center'>hobbies</h2>
            {children}
        </div>
    )
}

export default Hobbies
