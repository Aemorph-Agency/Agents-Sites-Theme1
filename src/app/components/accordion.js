'use client'

import React, { useState } from 'react';
import Icons from "./icons";
import '../styles/accordion.css';

const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`acc-block pt-7 pb-7 ${isOpen ? 'open' : ''}`}>
            <div className="acc-heading flex justify-between cursor-pointer" onClick={toggleAccordion}>
                <h3 className="text-black font-semibold -tracking-[0.32px] text-base">{title}</h3>
                <div className="acc-indicator transition duration-300 ease-in-out text-black text-base font-normal -tracking-[0.16px] leading-[150%]">
                    <Icons iconName="caretDown" />
                </div>
            </div>
            <div className={`acc-content transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {content}  
            </div>
        </div>
    );
};

export default Accordion;