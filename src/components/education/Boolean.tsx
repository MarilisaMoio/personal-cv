import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const Boolean: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Master full stack web developer"} where={"Boolean"} start={"gennaio 2024"} end={"luglio 2024"} />
            <div>
            Bootcamp svolto nell’arco di 6 mesi a regime fulltime, volto a fornire conoscenze e competenze nell’ambito della programmazione. Più nello specifico, dopo aver preso dimestichezza con i principi fondamentali di <span className='font-semibold'>HTML</span> e <span className='font-semibold'>CSS</span>, ci si è spostati su linguaggi di programmazione propriamente detti e relativi framework sia in ambito <span className='font-semibold'>front-end</span> che <span className='font-semibold'>back-end</span>, nonché sono state fornite le basi di gestione e interrogazione di database <span className='font-semibold'>SQL</span>.
            </div>
            <div>Tra le varie attività:</div>
            <ul>
                <li className='list-disc list-inside'>Realizzazione di un <a href="https://gamehoak-project.netlify.app" target="_blank" rel="noopener noreferrer" className='underline'>progetto</a> con <span className='font-semibold'>Vue</span> volto a replicare un mockup grafico di un eCommerce, con l’aggiunta in autonomia di funzionalità (es. caroselli; una wishlist e un carrello a cui poter aggiungere elementi; un countdown etc.);</li>
                <li className='list-disc list-inside'>Realizzazione di un progetto in team, volto a simulare un’applicazione per l’ordinazione di cibo da asporto: lato <span className='font-semibold'>back-end</span>  viene fornita ai ristoratori la possibilità di gestire i propri ristoranti, con relativi menù e ordini ricevuti; lato <span className='font-semibold'>front-end</span> è invece possibile visionare i ristoranti con la possibilità di applicare anche dei filtri, inserire nel carrello i piatti, regolandone la quantità, e inviare l’ordine al ristoratore.</li>
            </ul>
        </div>
    )
}

export default Boolean
