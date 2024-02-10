import { fireEvent, render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  test('renders ContactForm component', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  test('allows submitting when form is filled out', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'test' }
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello, this is a test message.' }
    })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))
  })
})
