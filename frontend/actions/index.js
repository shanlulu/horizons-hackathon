// Action Creators
import types from './types';
export function removeItem(id) {
 return {
  type: types.removeItem,
  id: id
 };
}

export function addItem() {
 return {
  type: types.addItem,
 };
}

export function fetch(foodItemObj) {
 return {
  type: types.fetch,
  foodItemObj: foodItemObj
 };
}
