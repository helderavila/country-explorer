import { all } from 'redux-saga/effects'

import country from './country/sagas'

export default function * rootSaga () {
  return yield all([
    country
  ])
}