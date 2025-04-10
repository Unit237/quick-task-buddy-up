
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-taskbuddy-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="text-lg font-bold text-taskbuddy-dark">TaskBuddy</span>
            </div>
            <p className="text-gray-600 text-sm">
              Connect with skilled people in your neighborhood for help with everyday tasks.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-600 text-sm hover:text-taskbuddy-primary">How It Works</Link></li>
              <li><Link to="/browse" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Browse Tasks</Link></li>
              <li><Link to="/post-task" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Post a Task</Link></li>
              <li><Link to="/pricing" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For Taskers</h3>
            <ul className="space-y-2">
              <li><Link to="/become-tasker" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Become a Tasker</Link></li>
              <li><Link to="/tasker-resources" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Tasker Resources</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Success Stories</Link></li>
              <li><Link to="/tasker-faq" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Tasker FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-taskbuddy-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 text-sm hover:text-taskbuddy-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 TaskBuddy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-taskbuddy-primary">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-taskbuddy-primary">Privacy Policy</Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-taskbuddy-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
