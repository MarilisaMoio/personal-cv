import React from 'react'
import { getImageUrl } from "@/utility.ts"

interface Props {
    tech: string,
}

const SingleTech: React.FC<Props> = ({ tech }) => {
    return (
        <img className="max-w-11 inline-block" src={getImageUrl(`tech/${tech}`)} alt="" />
    )
}

export default SingleTech
