import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../../components/Header'

test('Should be display the header', () => {
  const { getByText } = render(<Header />)

  expect(getByText('Início')).toBeInTheDocument()
  expect(getByText('country-explorer 🌎')).toBeInTheDocument()

  // expect(screen.getByRole('heading')).toHaveTextContent('country-explorer 🌎')
})