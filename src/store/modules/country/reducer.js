import produce from 'immer'

const INITIAL_STATE = {
  countries: [],
  loading: true,
}

export default function country (state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return state
    }
  })
}