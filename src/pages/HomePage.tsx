import React from 'react'
import { Link } from 'react-router-dom'
import { Server, Cloud, Shield, Code } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

const services = [
  {
    title: 'Managed IT Services',
    description: 'Keep your infrastructure running smoothly with proactive monitoring and support.',
    icon: Server
  },
  {
    title: 'Cloud Solutions',
    description: 'Move to the cloud with confidence and scale your business effortlessly.',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your data and systems with industry-leading security practices.',
    icon: Shield
  },
  {
    title: 'Software Development',
    description: 'Custom applications tailored to your business needs and goals.',
    icon: Code
  }
]

const stats = [
  { value: '200+', label: 'Clients worldwide' },
  { value: '15+', label: 'Years of experience' },
  { value: '50+', label: 'Experts on staff' },
  { value: '100%', label: 'Client satisfaction' }
]

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary-600 text-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TechSphere IT Services</h1>
          <p className="text-lg text-primary-100 mb-8">Reliable technology solutions to help your business grow.</p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>

      <section className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} icon={s.icon} />
        ))}
      </section>

      <Stats stats={stats} />

      <CTA title="Ready to transform your IT?" subtitle="Contact us today to discuss how we can help." />
    </div>
  )
}

export default HomePage
