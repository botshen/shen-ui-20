import { render, screen } from '@testing-library/react'
import Button from '../button/button.tsx'
import '@testing-library/jest-dom'

test('render a button', () => {
  render(<Button />)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})
