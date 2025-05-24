import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

const Stats: React.FC<StatsProps> = ({ 
  stats,
  title = "Trusted by businesses worldwide",
  subtitle = "We've helped hundreds of organizations improve their IT infrastructure and achieve their business goals."
}) => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
