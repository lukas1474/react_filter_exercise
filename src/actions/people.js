import * as types from '../types/people';

export const filterValue = payload => ({
  type: types.FILTER_VALUE,
  payload: payload
})
