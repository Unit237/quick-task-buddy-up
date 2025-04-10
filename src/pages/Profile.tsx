
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Star, 
  Briefcase, 
  CheckCircle, 
  Edit, 
  MessageSquare 
} from 'lucide-react';
import { tasks } from '@/data/tasks';
import TaskCard from '@/components/TaskCard';

const Profile = () => {
  const myTasks = tasks.slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                    <AvatarImage src="" alt="Alex Taylor" />
                    <AvatarFallback className="text-2xl">AT</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Alex Taylor</h1>
                        <div className="flex items-center mt-1 text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          <span>San Francisco, CA</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-1.5">
                          <Edit size={16} />
                          <span>Edit Profile</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-taskbuddy-primary" />
                        <span className="text-gray-600">alex.taylor@example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-taskbuddy-primary" />
                        <span className="text-gray-600">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />
                        <span className="text-gray-600">4.8 (36 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <Tabs defaultValue="my-tasks">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
                  <TabsTrigger value="offers">My Offers</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="my-tasks" className="mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {myTasks.map((task) => (
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
                </TabsContent>
                
                <TabsContent value="offers" className="mt-6">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Offers Yet</h3>
                      <p className="text-gray-600 mb-6">
                        You haven't made any offers on tasks yet. Browse available tasks to get started.
                      </p>
                      <Button>Browse Tasks</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews & Ratings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-semibold">Jane Doe</h4>
                              <div className="ml-2 flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star} 
                                    size={14} 
                                    className={star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">April 2, 2025</p>
                            <p className="text-gray-700">
                              Alex was professional, punctual, and did an excellent job assembling my furniture. 
                              Would definitely hire again for future tasks!
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-semibold">Mike Smith</h4>
                              <div className="ml-2 flex">
                                {[1, 2, 3, 4].map((star) => (
                                  <Star 
                                    key={star} 
                                    size={14} 
                                    className={star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                                  />
                                ))}
                                <Star size={14} className="text-gray-300" />
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">March 15, 2025</p>
                            <p className="text-gray-700">
                              Great help with my garden cleanup project. Worked efficiently and left everything 
                              looking much better than before. Would recommend.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Update your profile information, notification preferences, and account settings.
                      </p>
                      <div className="flex gap-4 mt-6">
                        <Button>Update Profile</Button>
                        <Button variant="outline">Change Password</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
