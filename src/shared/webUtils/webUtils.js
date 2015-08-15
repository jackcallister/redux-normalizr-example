import { normalize, Schema, arrayOf } from 'normalizr';

// Schema key must match response key.
const meal = new Schema('meals');
const ingredient = new Schema('ingredients');

meal.define({
  ingredients: arrayOf(ingredient)
});

const meals = {
  meals: [{
    id: 1,
    name: 'Butter Chicken',
    ingredients: [{
      id: 1,
      name: 'Butter'
    }, {
      id: 2,
      name: 'Chicken'
    }],
  }, {
    id: 2,
    name: 'Roast Chicken',
    ingredients: [{
      id: 2,
      name: 'Chicken'
    }]
  }]
}

export function loadMeals() {
  return new Promise((resolve, reject) => {
    resolve(normalize(meals, { meals: arrayOf(meal) }));
  });
}
