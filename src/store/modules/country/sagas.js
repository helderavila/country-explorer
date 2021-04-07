import { call, put, all, takeLatest } from 'redux-saga/effects'

import { countriesListSuccess } from './actions'

import api from '../../../services/api'

export function * countryList ({ payload }) {
  try {
    const response = yield call(api.get, `/all`)

    yield put(countriesListSuccess(response.data))

  } catch (e) {
    yield console.log('test')  
  }
  
}

export default all([
  takeLatest('@country/LIST_REQUEST', countryList),
])