import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  id?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  iconColor = "text-primary-600",
  id
}) => {
  return (
    <div id={id} className="card card-hover group">
      <div className={`p-3 rounded-lg inline-block ${iconColor} bg-primary-50 mb-5 group-hover:bg-primary-100 transition-colors`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
