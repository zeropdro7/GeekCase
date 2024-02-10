import { useState } from 'react'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-testid='contact-form'
      className='space-y-6'
    >
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <div>
        <button
          type='submit'
          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
