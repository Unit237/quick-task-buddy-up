
import React from 'react';
import { ClipboardList, Users, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} className="text-taskbuddy-primary" />,
    title: 'Post Your Task',
    description: 'Describe what you need help with and set your budget.'
  },
  {
    icon: <Users size={32} className="text-taskbuddy-primary" />,
    title: 'Get Matched',
    description: 'Review offers from skilled taskers in your area.'
  },
  {
    icon: <Calendar size={32} className="text-taskbuddy-primary" />,
    title: 'Schedule',
    description: 'Choose the best person for your task and set a time.'
  },
  {
    icon: <CheckCircle size={32} className="text-taskbuddy-primary" />,
    title: 'Task Completed',
    description: 'Your tasker arrives and gets the job done!'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-taskbuddy-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-taskbuddy-dark mb-3">How TaskBuddy Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting help has never been easier. Follow these simple steps to get your tasks done quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-gray-200 translate-x-1/2 z-0"></div>
              )}
              <div className="mb-4 mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-taskbuddy-dark">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
