import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

function SearchParams() {
  var [theme, setTheme] = useContext(ThemeContext),
      [location, updateLocation] = useState('Seattle, WA'),
      [breeds, updateBreeds] = useState([]),
      [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS),
      [breed, BreedDropdown, updateBreed] = useDropdown('Breed', '', breeds),
      [pets, setPets] = useState([]);
  
  async function requestPets() {
    var { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(function() {
    updateBreeds([]);
    updateBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      var breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor='location'>
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value='peru'>Peru</option>
            <option value='darkblue'>Dark Blue</option>
            <option value='chartreuse'>Chartreuse</option>
            <option value='mediumorchid'>Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;