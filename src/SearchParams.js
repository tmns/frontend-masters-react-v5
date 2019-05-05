import React, { useState, useEffect } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';

function SearchParams() {
  var [location, updateLocation] = useState('Seattle, WA');
  var [breeds, updateBreeds] = useState([]);
  var [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  var [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
            onBlur={e => updateBreed(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;