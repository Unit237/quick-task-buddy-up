
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, DollarSign, Clock, AlertCircle, MessageSquare } from 'lucide-react';
import { tasks } from '@/data/tasks';

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>();
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <AlertCircle size={48} className="mx-auto text-taskbuddy-accent mb-4" />
            <h1 className="text-2xl font-bold mb-2">Task Not Found</h1>
            <p className="text-gray-600 mb-6">The task you're looking for doesn't exist or has been removed.</p>
            <Link to="/browse">
              <Button>Browse Tasks</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { title, price, location, date, category, userName, status, description } = task;
  
  const statusColors = {
    open: 'bg-green-100 text-green-800',
    assigned: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  const statusText = {
    open: 'Open',
    assigned: 'Assigned',
    completed: 'Completed'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/browse" className="text-taskbuddy-primary hover:underline inline-flex items-center mb-4">
                ← Back to Browse
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">{category}</Badge>
                    <Badge className={statusColors[status]}>{statusText[status]}</Badge>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-taskbuddy-dark">{title}</h1>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm text-lg font-semibold">
                  <DollarSign size={18} className="text-taskbuddy-primary mr-1" />
                  ${price}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-4">Task Description</h2>
                      <p className="text-gray-700 whitespace-pre-line">{description}</p>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h2 className="text-xl font-semibold mb-4">Task Details</h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin size={20} className="text-taskbuddy-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-gray-700">{location}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar size={20} className="text-taskbuddy-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Date</h3>
                            <p className="text-gray-700">{date}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock size={20} className="text-taskbuddy-primary mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-medium">Duration</h3>
                            <p className="text-gray-700">Approximately 2-3 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-4">Posted by</h2>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src="" alt={userName} />
                          <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{userName}</p>
                          <p className="text-gray-500 text-sm">Member since 2023</p>
                        </div>
                      </div>
                    </div>
                    
                    {status === 'open' && (
                      <div className="space-y-4">
                        <Button className="w-full bg-taskbuddy-primary hover:bg-blue-600">
                          Make an Offer
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <MessageSquare size={16} className="mr-2" />
                          Ask a Question
                        </Button>
                      </div>
                    )}
                    
                    {status === 'assigned' && (
                      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-center">
                        <p className="text-blue-700 font-medium">This task has been assigned</p>
                      </div>
                    )}
                    
                    {status === 'completed' && (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center">
                        <p className="text-gray-700 font-medium">This task has been completed</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Similar Tasks</h2>
                    <div className="space-y-4">
                      {tasks
                        .filter(t => t.category === category && t.id !== id)
                        .slice(0, 2)
                        .map(t => (
                          <Link key={t.id} to={`/task/${t.id}`} className="block">
                            <div className="border rounded-md p-3 hover:border-taskbuddy-primary hover:bg-blue-50 transition-colors">
                              <h3 className="font-medium line-clamp-1">{t.title}</h3>
                              <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-600">{t.location}</span>
                                <span className="font-medium">${t.price}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className="mt-4">
                      <Link to="/browse" className="text-taskbuddy-primary hover:underline text-sm">
                        View more tasks →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaskDetail;
