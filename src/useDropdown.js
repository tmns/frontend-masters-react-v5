import React, { useState } from 'react';

function useDropdown(label, defaultState, options) {
  var [state, updateState] = useState(defaultState);
  var id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => updateState(e.target.value)}
          onBlur={e => updateState(e.target.value)}
          disabled={!options.length}
        >
          <option />
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    )
  }

  return [state, Dropdown];
}

export default useDropdown;