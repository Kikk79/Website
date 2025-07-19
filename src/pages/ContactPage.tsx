import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactPage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary-600 text-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-100">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="container-custom py-16 max-w-2xl">
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactPage
