import { render, screen } from '@testing-library/react'
import ContactPage from '../pages/contact'

describe('Contact Page', () => {
  test('renders Contact page with form', () => {
    render(<ContactPage />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })
})
