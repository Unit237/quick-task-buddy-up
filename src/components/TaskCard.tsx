
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  date: string;
  category: string;
  userAvatar?: string;
  userName: string;
  status: 'open' | 'assigned' | 'completed';
}

const TaskCard = ({
  id,
  title,
  price,
  location,
  date,
  category,
  userAvatar,
  userName,
  status
}: TaskCardProps) => {
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
    <Link to={`/task/${id}`} className="block">
      <div className="task-card flex flex-col h-full">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="secondary">{category}</Badge>
            <Badge className={statusColors[status]}>{statusText[status]}</Badge>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-taskbuddy-dark line-clamp-2">{title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2 text-taskbuddy-primary" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 text-taskbuddy-primary" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center text-gray-900 font-medium">
              <DollarSign size={16} className="mr-2 text-taskbuddy-primary" />
              <span>${price}</span>
            </div>
          </div>
          
          <div className="border-t pt-4 flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">Posted by {userName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;
