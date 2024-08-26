import React from 'react'

interface Props{
    children: React.ReactNode
}

const Resume: React.FC<Props> = ({children}) => {
    return (
        <div className='col-span-1 md:col-span-2 m-4 space-y-6'>
            {children}
        </div>
    )
}

export default Resume
