import React from 'react'
import { Server, Cloud, Shield, Code, Users, Network } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import CTA from '../components/CTA'

const services = [
  {
    title: 'Managed IT Services',
    description: 'Proactive monitoring and 24/7 support for your entire infrastructure.',
    icon: Server
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud migration and management services.',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive protection against modern threats and vulnerabilities.',
    icon: Shield
  },
  {
    title: 'Software Development',
    description: 'Custom web and mobile applications designed for your business.',
    icon: Code
  },
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to align technology with your business goals.',
    icon: Users
  },
  {
    title: 'Network Solutions',
    description: 'Reliable networking design and implementation for organizations.',
    icon: Network
  }
]

const ServicesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary-600 text-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-100">Comprehensive IT solutions tailored to your needs.</p>
        </div>
      </section>

      <section className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} icon={s.icon} />
        ))}
      </section>

      <CTA title="Need a custom solution?" subtitle="Get in touch and let us craft the right service package for you." />
    </div>
  )
}

export default ServicesPage
