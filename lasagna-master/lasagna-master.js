/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) {
    return 'Lasagna is done.';
  }
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer;
}

export function quantities(layers) {
  const noodles = layers.filter(layer => layer === 'noodles').length * 50;
  const sauce = layers.filter(layer => layer === 'sauce').length * 0.2;
  return {
    noodles: noodles,
    sauce: sauce,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const recipeCopy = {...recipe}
  const scaledRecipe = Object.fromEntries(
    Object.entries(recipeCopy).map(([key, value]) => [key, (value / 2 * portions)])
  )
  console.log(scaleRecipe)
  return scaledRecipe;
}