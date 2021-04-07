import produce from "immer";

const INITIAL_STATE = {
  countries: [],
  loading: false,
  pagination: {
    currentPage: 0,
    pageCount: 1,
  },
};

export default function country(state = INITIAL_STATE, { payload, type }) {
  return produce(state, (draft) => {
    switch (type) {
      case "@country/LIST_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@country/LIST_SUCCESS": {
        draft.loading = false;
        draft.countries = payload.dataRequest;
        draft.pagination.pageCount = Number((payload.dataRequest.length / 12).toFixed())
        break;
      }
      case "@country/REQUEST": {
        draft.loading = true;
        break;
      }
      case "@country/SUCCESS": {
        draft.loading = false;
        draft.country = payload.dataRequest;
        break;
      }
      case "@country/EDIT_REQUEST": {
        const updatedCountries = draft.countries;
        const findCountry = updatedCountries.find(
          (country) => country.alpha3Code === payload.searchParam
        );
        if (findCountry) {
          findCountry.name = payload.dataRequest.name;
          findCountry.capital = payload.dataRequest.capital;
          findCountry.region = payload.dataRequest.region;
          findCountry.area = payload.dataRequest.area;
          findCountry.population = payload.dataRequest.population;
        }
        draft.countries = updatedCountries;
        break;
      }
      case '@country/NEXT_PAGE': {
        draft.pagination.currentPage += 1
        break;
      }
      case '@country/PREVIOUS_PAGE': {
        draft.pagination.currentPage -= 1
        break;
      }
      default:
        return state;
    }
  });
}
