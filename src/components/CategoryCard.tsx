
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor?: string;
  href: string;
}

const CategoryCard = ({ 
  title, 
  icon, 
  description, 
  bgColor = 'bg-blue-50', 
  href 
}: CategoryCardProps) => {
  return (
    <Link to={href} className="block">
      <div className="task-card h-full flex flex-col hover:translate-y-[-5px] transition-all duration-200">
        <div className={cn("p-6 flex items-center justify-center", bgColor)}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-taskbuddy-dark mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
