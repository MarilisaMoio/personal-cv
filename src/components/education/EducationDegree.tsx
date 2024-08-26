import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const EducationDegree: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Laurea triennale in scienze dell’educazione della formazione"} where={"Università Cusano"} start={"settembre 2020"} end={"ottobre 2023"} />
            <div>Corso di laurea incentrato principalmente su argomenti pedagogici e didattici, con incisi di carattere psicologico, antropologico e sociologico.</div>
            <div>Tesi: <em>Educazione, formazione e Videogames: verso un protocollo di analisi.</em></div>
        </div>
    )
}

export default EducationDegree
