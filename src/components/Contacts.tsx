import React from 'react'
import { FaPhone, FaLocationDot, FaSquareGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Contacts: React.FC = () => {
    return (
        <div>
            <ul className='flex md:flex-col flex-wrap justify-center'>
                <li className='list-none flex items-center md:space-x-3'>
                    <FaPhone size={15} />
                    <span> +39 328-289-3314</span>
                </li>
                <li className='list-none flex items-center ml-2 md:ml-0 md:space-x-3 underline'>
                    <FaEnvelope size={15} />
                    <a href="mailto:moiomarilisa@gmail.com">moiomarilisa@gmail.com</a>
                </li>
                <li className='list-none flex items-center ml-2 md:ml-0 md:space-x-3'>
                    <FaLocationDot size={15} />
                    <span>Bergamo</span>
                </li>
                <li className='list-none flex items-center ml-2 md:ml-0 md:space-x-2 underline'>
                    <FaSquareGithub size={18} />
                    <a href="https://github.com/MarilisaMoio" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className='list-none flex items-center ml-2 md:ml-0 md:space-x-2 underline'>
                    <FaLinkedin size={18} />
                    <a href="https://www.linkedin.com/in/marilisa-moio-6490b8314/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts
