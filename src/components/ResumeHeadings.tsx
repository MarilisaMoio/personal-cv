import React from 'react'

interface Props {
    title: string
    where: string
    start: string
    end: string
}

const ResumeHeadings: React.FC<Props> = ({title, where, start, end}) => {
    return (
        <div className='mb-2'>
            <h2 className='font-bold'>{title}</h2>
            <div className='font-extralight'>{where} | {start} - {end}</div>
        </div>
    )
}

export default ResumeHeadings
