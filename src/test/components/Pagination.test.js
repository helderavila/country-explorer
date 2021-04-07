import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Pagination from '../../components/Pagination'

const pagination = {
  currentPage: 1,
  pageCount: 21
}

test('Should be display the pagination', async () => {
  const { getByTestId } = render(<Pagination currentPage={pagination.currentPage} pageCount={pagination.pageCount}/>)

  expect(getByTestId('footer-pagination')).toBeInTheDocument()
  expect(getByTestId('previous-button-pagination')).toBeInTheDocument()
  expect(getByTestId('next-button-pagination')).toBeInTheDocument()

  expect(getByTestId('text-pagination')).toHaveTextContent(`${pagination.currentPage}/${pagination.pageCount}`)

})