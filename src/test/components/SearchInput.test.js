import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SearchInput from '../../components/SearchInput'

test('Should be display the search input', async () => {
  const { getByTestId } = render(<SearchInput />)

  expect(getByTestId('search-input-container')).toBeInTheDocument()
  expect(getByTestId('search-input')).toBeInTheDocument()


})