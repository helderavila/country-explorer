export function countriesListRequest() {
  return {
    type: '@country/LIST_REQUEST',
  }
}

export function countriesListSuccess(dataRequest) {
  return {
    type: '@country/LIST_SUCCESS',
    payload: { dataRequest }
  }
}

export function countryRequest() {
  return {
    type: '@country/REQUEST',
  }
}

export function countrySuccess(dataRequest) {
  return {
    type: '@country/SUCCESS',
    payload: { dataRequest }
  }
}

export function countryEditRequest(dataRequest, searchParam) {
  return {
    type: '@country/EDIT_REQUEST',
    payload: { dataRequest, searchParam }
  }
}