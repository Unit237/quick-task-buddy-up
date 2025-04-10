
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TaskCard from '@/components/TaskCard';
import { tasks } from '@/data/tasks';
import { categories } from '@/data/categories';
import { 
  Slider, 
  SliderTrack, 
  SliderFilledTrack, 
  SliderThumb,
  SliderMark,
} from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Search, Sliders, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Browse = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState('all');

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredTasks = tasks.filter(task => {
    // Price filter
    if (task.price < priceRange[0] || task.price > priceRange[1]) return false;
    
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(task.category)) return false;
    
    // Status filter
    if (statusFilter !== 'all' && task.status !== statusFilter) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-taskbuddy-primary text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Browse Available Tasks</h1>
            <p className="text-blue-100">
              Find opportunities to help others and earn money in your area
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Sidebar - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter size={18} className="mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <div className="px-2">
                      <Slider 
                        defaultValue={[0, 200]} 
                        max={200} 
                        step={5} 
                        minStepsBetweenThumbs={1}
                        onValueChange={(value) => setPriceRange(value as number[])}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.slice(0, 6).map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category.id}`} 
                            checked={selectedCategories.includes(category.title)}
                            onCheckedChange={() => handleCategoryChange(category.title)}
                          />
                          <Label htmlFor={`category-${category.id}`}>{category.title}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Status Filter */}
                  <div>
                    <h3 className="font-medium mb-4">Status</h3>
                    <RadioGroup defaultValue="all" onValueChange={setStatusFilter}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="status-all" />
                        <Label htmlFor="status-all">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="open" id="status-open" />
                        <Label htmlFor="status-open">Open</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="assigned" id="status-assigned" />
                        <Label htmlFor="status-assigned">Assigned</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button className="w-full" variant="outline">Reset Filters</Button>
                </CardContent>
              </Card>
            </aside>
            
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center">
                    <Sliders size={16} className="mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="h-full overflow-auto py-6 space-y-6">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    
                    {/* Price Range Filter */}
                    <div>
                      <h3 className="font-medium mb-4">Price Range</h3>
                      <div className="px-2">
                        <Slider 
                          defaultValue={[0, 200]} 
                          max={200} 
                          step={5} 
                          minStepsBetweenThumbs={1}
                          onValueChange={(value) => setPriceRange(value as number[])}
                        />
                        <div className="flex justify-between mt-2 text-sm text-gray-600">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}+</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Filter */}
                    <div>
                      <h3 className="font-medium mb-4">Categories</h3>
                      <div className="space-y-2">
                        {categories.slice(0, 6).map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-category-${category.id}`} 
                              checked={selectedCategories.includes(category.title)}
                              onCheckedChange={() => handleCategoryChange(category.title)}
                            />
                            <Label htmlFor={`mobile-category-${category.id}`}>{category.title}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Status Filter */}
                    <div>
                      <h3 className="font-medium mb-4">Status</h3>
                      <RadioGroup defaultValue="all" onValueChange={setStatusFilter}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all" id="mobile-status-all" />
                          <Label htmlFor="mobile-status-all">All</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="open" id="mobile-status-open" />
                          <Label htmlFor="mobile-status-open">Open</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="assigned" id="mobile-status-assigned" />
                          <Label htmlFor="mobile-status-assigned">Assigned</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button className="w-full" variant="outline">Reset Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Search Results */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full py-2 pl-10 pr-4 border rounded-md"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">Found {filteredTasks.length} tasks</p>
                <select className="border rounded-md py-1 px-2 text-sm">
                  <option>Newest first</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTasks.map((task) => (
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
              
              {filteredTasks.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                  <Button variant="outline">Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
