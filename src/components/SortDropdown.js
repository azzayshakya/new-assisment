import React, { useState } from 'react';
import '@/app/styles/SortDropdown.css';


const options = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH'
];

const SortDropdown = ({ sort = options[0], setSort = () => {} }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSort(option);
    setOpen(false);
  };

  return (
    <div className="sort-dropdown">
      <div className="sort-selected" onClick={() => setOpen(!open)}>
        <span>{sort}</span>
        <span className={`arrow ${open ? 'arrow-up' : ''}`}>▼</span>
      </div>
      
      {open && (
        <div className="sort-options">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${option === sort ? 'active' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option === sort && <span className="check">✓</span>}
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;