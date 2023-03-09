const COCTAILS =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
const COCTAIL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const getCoctails = () =>
  fetch(COCTAILS).then(response => response.json());

export const getCoctail = id =>
  fetch(`${COCTAIL}${id}`).then(response => response.json());
