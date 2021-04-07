import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CountryCard from '../../components/CountryCard'

const country = {
  name: 'Brazil',
  flag: 'https://restcountries.eu/data/bra.svg',
  capital: 'Brasília',
  region: 'Americas',
  population: 206135893,
  latlng: [-10.0,-55.0],
  area: 8515767.0,
  domain: '.br',
}

test('Should be display the country card', async () => {
  const { getByTestId } = render(<CountryCard country={country}/>)

  expect(getByTestId('country-card-container')).toBeInTheDocument()
  expect(getByTestId('country-card-edit-button')).toBeInTheDocument()
  expect(getByTestId('country-card-image')).toBeInTheDocument()
  expect(getByTestId('country-card-title')).toBeInTheDocument()
  



  // expect(getByTestId('search-input')).toBeInTheDocument()


})