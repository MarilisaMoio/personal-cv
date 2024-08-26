
import React from 'react'
import ResumeHeadings from '@/components/ResumeHeadings'

const BoolTrainee: React.FC = () => {
    return (
        <div>
            <ResumeHeadings title={"Jr. Full Stack Web Developer trainee"} where={"Boolean"} start={"gennaio 2024"} end={"luglio 2024"} />
            <ul>
                <li className='list-disc list-inside'>Realizzazione di un <a href="https://gamehoak-project.netlify.app" target="_blank" rel="noopener noreferrer" className='underline'>progetto</a> con <span className='font-semibold'>Vue</span> volto a replicare un mockup grafico di un eCommerce, con l’aggiunta in autonomia di funzionalità (es. caroselli; una wishlist e un carrello a cui poter aggiungere elementi; un countdown etc.);</li>
                <li className='list-disc list-inside'>Realizzazione di un progetto in team, volto a simulare un’applicazione per l’ordinazione di cibo da asporto: lato <span className='font-semibold'>back-end</span>  viene fornita ai ristoratori la possibilità di gestire i propri ristoranti, con relativi menù e ordini ricevuti; lato <span className='font-semibold'>front-end</span> è invece possibile visionare i ristoranti con la possibilità di applicare anche dei filtri, inserire nel carrello i piatti, regolandone la quantità, e inviare l’ordine al ristoratore.</li>
            </ul>
        </div>
    )
}

export default BoolTrainee
