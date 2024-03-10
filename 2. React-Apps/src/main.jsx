import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Accordion from './Components/Acordion/Accordion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
);
