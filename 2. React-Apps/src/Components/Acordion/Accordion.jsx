import { useState, useEffect } from 'react';
import AccordionItems from './AccordionItems';

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

export default Accordion;
