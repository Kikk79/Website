import React from 'react'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

const stats = [
  { value: '200+', label: 'Successful projects' },
  { value: '15+', label: 'Years in business' },
  { value: '50+', label: 'Skilled professionals' },
  { value: '5', label: 'Global offices' }
]

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary-600 text-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechSphere</h1>
          <p className="text-lg text-primary-100">Delivering innovative technology solutions since 2009.</p>
        </div>
      </section>

      <section className="container-custom py-16 space-y-8 max-w-3xl">
        <h2 className="section-title">Our Mission</h2>
        <p className="text-gray-700">
          TechSphere is dedicated to helping organizations harness the power of technology.
          We combine deep industry expertise with a commitment to exceptional service.
        </p>
        <p className="text-gray-700">
          Our team partners closely with clients to design, implement and manage solutions
          that drive real business value. Whether you need ongoing support or help with a
          one‑time project, we are ready to assist.
        </p>
      </section>

      <Stats stats={stats} />

      <CTA title="Join hundreds of happy clients" subtitle="Let our experts guide your next technology initiative." />
    </div>
  )
}

export default AboutPage
