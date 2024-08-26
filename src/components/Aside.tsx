import React from 'react'

interface Props{
    children: React.ReactNode
}

const Aside: React.FC<Props> = ({children}) => {
    return (
        <aside className='col-span-1 m-4 md:mx-0 space-y-5 h-100 border-lime-300 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4 flex justify-between md:block flex-wrap md:flex-nowrap'>
            {children}
        </aside>
    )
}

export default Aside 
