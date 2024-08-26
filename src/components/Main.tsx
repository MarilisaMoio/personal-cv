import React from 'react'

interface Props{
    children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <main className='md:grid md:grid-rows-none md:grid-cols-3 px-6'>
            {children}
        </main>
    )
}

export default Main
