import { call, put, all, takeLatest } from 'redux-saga/effects'

export function * getUser ({ payload }) {
  try {
    yield console.log('test')
  } catch (e) {
    yield console.log('test')  
  }
  
}

export default all([
  takeLatest('@user/REQUEST', getUser),
])