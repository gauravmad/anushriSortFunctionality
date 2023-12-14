import React from 'react';

const MyFilter = ({ title, filterChangeCallback }) => {
  const [filterState, setFilterState] = React.useState('Filter off');

  const updateFilter = (value) => {
    setFilterState(value);
    filterChangeCallback();
  };

  const radioBt = (value, checked) => (
    <label htmlFor="jewellarytype">
      <input
        type="radio"
        name="jewellarytype"
        value={value}
        checked={checked}
        onChange={() => updateFilter(value)}
      />
      {value}
    </label>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <div className="filter-title">{title}</div>
      {radioBt('Filter off', filterState === 'Filter off')}
      {radioBt('Bangle', filterState === 'Bangle')}
      {radioBt('Necklace', filterState === 'Necklace')}
      {radioBt('Cuffs', filterState === 'Cuffs')}
      {radioBt('Bracelet', filterState === 'Bracelet')}
      {radioBt('Ring', filterState === 'Ring')}
      {radioBt('Pierce', filterState === 'Pierce')}
      {radioBt('Pendant Top', filterState === 'Pendant Top')}
      {radioBt('Pin', filterState === 'Pin')}
      {radioBt('Brooch', filterState === 'Brooch')}
    </div>
  );
};



export default MyFilter;
