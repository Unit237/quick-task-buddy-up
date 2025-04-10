
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CategoryCard from '@/components/CategoryCard';
import TaskCard from '@/components/TaskCard';
import { Button } from "@/components/ui/button";
import { tasks } from '@/data/tasks';
import { categories } from '@/data/categories';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredTasks = tasks.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-taskbuddy-dark mb-3">Popular Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our most popular task categories and find the help you need, when you need it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.slice(0, 8).map((category) => (
                <CategoryCard 
                  key={category.id}
                  title={category.title}
                  icon={category.icon}
                  description={category.description}
                  bgColor={category.bgColor}
                  href={category.href}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/browse">
                <Button variant="outline" size="lg">
                  View All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-taskbuddy-dark mb-3">Recently Posted Tasks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check out the latest tasks posted by people in your area
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTasks.map((task) => (
                <TaskCard 
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  price={task.price}
                  location={task.location}
                  date={task.date}
                  category={task.category}
                  userAvatar={task.userAvatar}
                  userName={task.userName}
                  status={task.status}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/browse">
                <Button className="bg-taskbuddy-primary hover:bg-blue-600" size="lg">
                  Browse All Tasks
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-taskbuddy-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-3xl font-bold mb-3">Ready to get things done?</h2>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Join thousands of people using TaskBuddy to get help with their tasks or earn money by helping others.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/browse">
                  <Button size="lg" className="bg-white text-taskbuddy-primary hover:bg-gray-100">
                    Find Tasks
                  </Button>
                </Link>
                <Link to="/create-task">
                  <Button size="lg" className="bg-taskbuddy-secondary hover:bg-green-600 border border-white">
                    Post a Task
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
