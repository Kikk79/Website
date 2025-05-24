import React from 'react';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  subtitle: string;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-primary-900 py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-primary-100 mb-8 md:mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/services" className="btn border-2 border-white text-white hover:bg-primary-800">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
