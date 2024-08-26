import React from 'react'

interface Props {
    name: string,
    text: string
}

const SingleHobby: React.FC<Props> = ({text, name}) => {
    return (
        <div>
            <span className='font-bold'>{name}</span> - <span>{text}</span>
        </div>
    )
}

export default SingleHobby
