import produce from 'immer'

const INITIAL_STATE = {
  countries: [],
  country: [],
  loading: false,
  metadata: {
    pagination: {
      currentPage: 1,
      pageCount: 1,
      totalCount: -1,
      limit: 35
    }
  }
}

export default function country (state = INITIAL_STATE, { payload, type }) {
  return produce(state, draft => {
    switch (type) {
      case '@country/LIST_REQUEST': {
        draft.loading = true
        break
      }
      case '@country/LIST_SUCCESS': {
        draft.loading = false
        draft.countries = payload.dataRequest
        break
      }
      case '@country/REQUEST': {
        draft.loading = true
        break
      }
      case '@country/SUCCESS': {
        draft.loading = false
        draft.country = payload.dataRequest
        break
      }
      default:
        return state
    }
  })
}