
import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const BoolTrainee: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Jr. Web Developer"} where={"Apping s.r.l."} start={"aprile 2025"} end={"luglio 2026"} />
            <p>
                In questo ruolo mi sono occupata principalmente dello sviluppo di soluzioni custom su Sales2APP, un CRM in PHP e MariaDB. Ho sviluppato nuove funzionalità su richiesta dei clienti, curato la manutenzione e il refactoring, lavorato sull'ottimizzazione delle performance lato applicativo e database e sviluppato gli endpoint API a supporto della nuova applicazione mobile.
            </p>
        </div>
    )
}

export default BoolTrainee
