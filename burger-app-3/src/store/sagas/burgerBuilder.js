import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-order';

export function* initIngredientSaga(action){
  try {
    const response = yield axios.get('https://react-my-burger-f364a.firebaseio.com/ingredients.json');
    yield put (actions.setIngredients(response.data));
  }catch(error) {
    yield put(actions.fetchIngredientsFailed(error.response.data.error));
  };
}