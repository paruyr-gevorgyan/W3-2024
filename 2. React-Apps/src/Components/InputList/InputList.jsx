import { useState } from 'react';

import './style.css';

const fruits = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Apricot',
  },
  {
    id: 3,
    name: 'Avocado',
  },
  {
    id: 4,
    name: 'Banana',
  },
  {
    id: 5,
    name: 'Bilberry',
  },
  {
    id: 6,
    name: 'Blackberry',
  },
  {
    id: 7,
    name: 'Blackcurrant',
  },
  {
    id: 8,
    name: 'Blueberry',
  },
  {
    id: 9,
    name: 'Boysenberry',
  },
  {
    id: 10,
    name: 'Currant',
  },
  {
    id: 11,
    name: 'Cherry',
  },
  {
    id: 12,
    name: 'Cherimoya',
  },
  {
    id: 13,
    name: 'Cloudberry',
  },
  {
    id: 14,
    name: 'Coconut',
  },
  {
    id: 15,
    name: 'Cranberry',
  },
  {
    id: 16,
    name: 'Custard apple',
  },
  {
    id: 17,
    name: 'Damson',
  },
  {
    id: 18,
    name: 'Date',
  },
  {
    id: 19,
    name: 'Dragonfruit',
  },
  {
    id: 20,
    name: 'Durian',
  },
  {
    id: 21,
    name: 'Elderberry',
  },
  {
    id: 22,
    name: 'Feijoa',
  },
  {
    id: 23,
    name: 'Fig',
  },
  {
    id: 24,
    name: 'Goji berry',
  },
  {
    id: 25,
    name: 'Gooseberry',
  },
  {
    id: 26,
    name: 'Grape',
  },
  {
    id: 27,
    name: 'Raisin',
  },
  {
    id: 28,
    name: 'Grapefruit',
  },
  {
    id: 29,
    name: 'Guava',
  },
];

const InputList = () => {
  const [inputText, setInputText] = useState('');
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleInputChange = (inputValue) => {
    setInputText(inputValue);
    const filtered = fruits.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredItems(filtered);
  };

  return (
    <div className='inputList'>
      <input
        placeholder='Search...'
        value={inputText}
        onChange={({ target: { value } }) => handleInputChange(value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputList;
