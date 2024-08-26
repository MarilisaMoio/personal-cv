import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const Boolean: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Master full stack web developer"} where={"Boolean"} start={"gennaio 2024"} end={"luglio 2024"} />
            <div>
            Bootcamp svolto nell’arco di 6 mesi a regime fulltime, volto a fornire conoscenze e competenze nell’ambito della programmazione. Più nello specifico, dopo aver preso dimestichezza con i principi fondamentali di <span className='font-semibold'>HTML</span> e <span className='font-semibold'>CSS</span>, ci si è spostati su linguaggi di programmazione propriamente detti e relativi framework sia in ambito <span className='font-semibold'>front-end</span> che <span className='font-semibold'>back-end</span>, nonché sono state fornite le basi di gestione e interrogazione di database <span className='font-semibold'>SQL</span>.
            </div>
        </div>
    )
}

export default Boolean
