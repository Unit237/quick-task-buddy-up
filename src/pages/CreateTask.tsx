
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [date, setDate] = React.useState<Date>();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/browse');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-taskbuddy-dark">Post a Task</h1>
              <p className="text-gray-600 mt-2">
                Describe your task to get matched with skilled taskers
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Task Title */}
                  <div>
                    <Label htmlFor="title" className="text-base font-medium">Task Title</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g., Help moving furniture, Fix leaking faucet" 
                      className="mt-2"
                    />
                  </div>
                  
                  {/* Task Description */}
                  <div>
                    <Label htmlFor="description" className="text-base font-medium">Task Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your task in detail..." 
                      className="mt-2 min-h-[150px]"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Include all the details someone would need to complete your task.
                    </p>
                  </div>
                  
                  {/* Task Category */}
                  <div>
                    <Label htmlFor="category" className="text-base font-medium">Category</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Task Location */}
                  <div>
                    <Label className="text-base font-medium">Location Type</Label>
                    <RadioGroup defaultValue="in-person" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="in-person" id="in-person" />
                        <Label htmlFor="in-person">In Person</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote">Remote / Virtual</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Task Date */}
                    <div>
                      <Label className="text-base font-medium">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full mt-2 justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Task Time */}
                    <div>
                      <Label htmlFor="time" className="text-base font-medium">Time</Label>
                      <div className="relative mt-2">
                        <Input id="time" type="time" className="pl-10" />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Task Budget */}
                  <div>
                    <Label htmlFor="budget" className="text-base font-medium">Budget</Label>
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        $
                      </span>
                      <Input 
                        id="budget" 
                        type="number" 
                        placeholder="Enter amount" 
                        className="pl-8"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Set a realistic budget to attract qualified taskers
                    </p>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row justify-end gap-4">
                    <Button type="button" variant="outline">Save as Draft</Button>
                    <Button type="submit" className="bg-taskbuddy-primary hover:bg-blue-600">
                      Post Task
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateTask;
