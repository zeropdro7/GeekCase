import ContactForm from '../ui/components/ContactForm'

const ContactPage: React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-xl font-bold my-4'>Contact me!</h1>
      <ContactForm />
    </div>
  )
}

export default ContactPage
