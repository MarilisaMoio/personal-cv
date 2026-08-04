
import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const BoolTrainee: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Jr. Web Developer"} where={"Apping s.r.l."} start={"aprile 2025"} end={"luglio 2026"} />
            <p>
                In questo ruolo mi sono occupata principalmente dello sviluppo di soluzioni custom su Sales2APP, un CRM in <span className='font-semibold'>PHP</span> e <span className='font-semibold'>MariaDB</span>. Ho sviluppato nuove funzionalità su <span className='font-semibold'>richiesta dei clienti</span>, curato la manutenzione e il <span className='font-semibold'>refactoring</span>, lavorato sull'<span className='font-semibold'>ottimizzazione delle performance</span> sia lato applicativo che database e sviluppato gli <span className='font-semibold'>endpoint API</span> a supporto della nuova applicazione mobile.
            </p>
        </div>
    )
}

export default BoolTrainee
