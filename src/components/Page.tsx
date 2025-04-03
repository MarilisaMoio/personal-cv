import React from 'react'

interface Props {
    children: React.ReactNode
}

const Page: React.FC<Props> = ({children}) => {
    return (
        <div className="m-auto my-4 max-w-[22cm] shadow-sm rounded-lg bg-stone-50 px-4">
            {children}
        </div>
    )
}

export default Page
