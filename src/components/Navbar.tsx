
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Menu } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-taskbuddy-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">TB</span>
          </div>
          <span className="hidden sm:block text-xl font-bold text-taskbuddy-dark">TaskBuddy</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for tasks..."
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:ring-2 focus:ring-taskbuddy-primary focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/browse" className="text-gray-600 hover:text-taskbuddy-primary transition-colors">
            Browse Tasks
          </Link>
          <Link to="/create-task" className="text-gray-600 hover:text-taskbuddy-primary transition-colors">
            Post a Task
          </Link>
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-taskbuddy-accent rounded-full"></span>
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </Link>
          <Link to="/create-task">
            <Button className="bg-taskbuddy-primary hover:bg-blue-600">
              Post a Task
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-taskbuddy-accent rounded-full"></span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for tasks..."
                    className="w-full py-2 pl-10 pr-4 border rounded-md"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                </div>
                <Link to="/browse" className="text-lg font-medium">
                  Browse Tasks
                </Link>
                <Link to="/create-task" className="text-lg font-medium">
                  Post a Task
                </Link>
                <Link to="/profile" className="text-lg font-medium">
                  My Profile
                </Link>
                <Button className="w-full bg-taskbuddy-primary hover:bg-blue-600">
                  Post a Task
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
