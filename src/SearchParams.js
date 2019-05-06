import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Router from '@reach/router';

import useDropdown from './useDropdown';
import Results from './Results';

function SearchParams() {
  var [location, updateLocation] = useState('Seattle, WA'),
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
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;