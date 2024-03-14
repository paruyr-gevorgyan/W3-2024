import { bool, func, node, number, string } from 'prop-types';

import './style.css';

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

export default AccordionItems;
