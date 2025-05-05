'use client';

import { useState } from 'react';
import '@/app/styles/SidebarFilters.css'; 

const filterOptions = {
  'IDEAL FOR': ['Men', 'Women', "Baby's & Kids"],
  OCCASION: ['Casual', 'Party', 'Work'],
  WORK: ['Formal', 'Outdoor'],
  FABRIC: ['Cotton', 'Linen', 'Wool'],
  SEGMENT: ['Luxury', 'Essentials'],
  'SUITABLE FOR': ['Summer', 'Winter'],
  'RAW MATERIALS': ['Organic', 'Synthetic'],
  PATTERN: ['Solid', 'Printed']
};

export default function SidebarFilters() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="sidebar-filter">
     

      <div className="filter-block">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {Object.entries(filterOptions).map(([section, options]) => (
        <div key={section} className="filter-section">
          <div className="filter-title" onClick={() => toggleExpand(section)}>
            {section}
            <span className="arrow">{expanded[section] ? '▲' : '▼'}</span>
          </div>
          {expanded[section] && (
            <ul className="filter-options">
              {options.map((opt) => (
                <li key={opt}>
                  <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span>{opt}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
