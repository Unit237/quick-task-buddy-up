
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-taskbuddy-primary to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Get More Done <br />
                <span className="text-taskbuddy-secondary">With TaskBuddy</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
                Connect with skilled people in your community who can help with everyday tasks - from handyman work to virtual assistance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/browse">
                  <Button size="lg" className="bg-white text-taskbuddy-primary hover:bg-gray-100">
                    Browse Tasks
                  </Button>
                </Link>
                <Link to="/create-task">
                  <Button size="lg" className="bg-taskbuddy-secondary hover:bg-green-600">
                    Post a Task
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white rounded-lg shadow-xl p-6 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4 text-taskbuddy-dark">Find help today</h2>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What do you need help with?"
                    className="w-full py-3 pl-10 pr-4 border rounded-md text-gray-800 focus:ring-2 focus:ring-taskbuddy-primary focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                </div>
                
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full py-3 px-4 border rounded-md text-gray-800 focus:ring-2 focus:ring-taskbuddy-primary focus:border-transparent"
                />
                
                <Button className="w-full py-6 bg-taskbuddy-primary hover:bg-blue-600 text-white text-lg">
                  Search
                </Button>
                
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <Link to="/category/cleaning" className="text-center p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors text-sm text-taskbuddy-dark">
                    Cleaning
                  </Link>
                  <Link to="/category/delivery" className="text-center p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors text-sm text-taskbuddy-dark">
                    Delivery
                  </Link>
                  <Link to="/category/handyman" className="text-center p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors text-sm text-taskbuddy-dark">
                    Handyman
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
