import React from 'react'

interface Props{
    children: React.ReactNode
    title: string
}

const ResumeSection: React.FC<Props> = ({children, title}) => {
    return (
        <section className='space-y-4'>
            <h2 className='uppercase font-normal text-3xl'>{title}</h2>
            {children}
        </section>
    )
}

export default ResumeSection
