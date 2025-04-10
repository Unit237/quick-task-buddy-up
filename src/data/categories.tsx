
import React from 'react';
import { Home, Truck, Wrench, Brush, Gift, Dog, Monitor, Book, ShoppingBag } from 'lucide-react';

export const categories = [
  {
    id: 'cleaning',
    title: 'Cleaning',
    icon: <Brush size={36} className="text-purple-500" />,
    description: 'Home & office cleaning services',
    bgColor: 'bg-purple-50',
    href: '/category/cleaning'
  },
  {
    id: 'delivery',
    title: 'Delivery',
    icon: <Truck size={36} className="text-blue-500" />,
    description: 'Get items picked up & delivered',
    bgColor: 'bg-blue-50',
    href: '/category/delivery'
  },
  {
    id: 'handyman',
    title: 'Handyman',
    icon: <Wrench size={36} className="text-yellow-500" />,
    description: 'Repairs & home improvements',
    bgColor: 'bg-yellow-50',
    href: '/category/handyman'
  },
  {
    id: 'home',
    title: 'Home Services',
    icon: <Home size={36} className="text-green-500" />,
    description: 'Moving, furniture assembly & more',
    bgColor: 'bg-green-50',
    href: '/category/home'
  },
  {
    id: 'gifts',
    title: 'Personal Shopping',
    icon: <Gift size={36} className="text-red-500" />,
    description: 'Gift selection & shopping assistance',
    bgColor: 'bg-red-50',
    href: '/category/shopping'
  },
  {
    id: 'pets',
    title: 'Pet Care',
    icon: <Dog size={36} className="text-orange-500" />,
    description: 'Pet sitting, walking & more',
    bgColor: 'bg-orange-50',
    href: '/category/pets'
  },
  {
    id: 'virtual',
    title: 'Virtual Help',
    icon: <Monitor size={36} className="text-indigo-500" />,
    description: 'Digital assistance & consulting',
    bgColor: 'bg-indigo-50',
    href: '/category/virtual'
  },
  {
    id: 'education',
    title: 'Education',
    icon: <Book size={36} className="text-teal-500" />,
    description: 'Tutoring & educational support',
    bgColor: 'bg-teal-50',
    href: '/category/education'
  }
];
