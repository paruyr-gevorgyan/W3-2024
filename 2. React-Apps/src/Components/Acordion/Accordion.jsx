import { useState, useEffect } from 'react';
import { bool, func, node, number, string } from 'prop-types';

import './style.css';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const res = await req.json();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='accordion'>
      {data.map((item, index) => (
        <AccordionItems
          title={item.title}
          number={index + 1}
          key={item.title}
          setIsOpen={setIsOpen}
          isOpen={isOpen === index + 1}
        >
          {item.body}
        </AccordionItems>
      ))}
    </div>
  );
};

const AccordionItems = ({ title, number, isOpen, setIsOpen, children }) => {
  return (
    <div className={`item  ${isOpen ? 'open' : ''}`}>
      <p className='number'>{number <= 9 ? `0${number}` : number}</p>
      <p className='text'>{title}</p>
      <svg
        onClick={() => setIsOpen((isOpen) => (isOpen === number ? null : number))}
        className='icon'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        {isOpen ? (
          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        )}
      </svg>
      {isOpen && (
        <div className='content-box'>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

AccordionItems.propTypes = {
  title: string,
  number: number,
  isOpen: bool,
  setIsOpen: func,
  children: node,
};

export default Accordion;
