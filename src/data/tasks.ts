
export const tasks = [
  {
    id: '1',
    title: 'Need help assembling IKEA furniture',
    price: 75,
    location: 'Brooklyn, NY',
    date: 'Apr 15, 2025',
    category: 'Handyman',
    userName: 'Alex M.',
    userAvatar: '',
    status: 'open' as const,
    description: 'I have a new IKEA desk and bookshelf that need to be assembled. Looking for someone with experience who can complete this in 2-3 hours. All tools should be provided by you.'
  },
  {
    id: '2',
    title: 'Deep cleaning for 2-bedroom apartment',
    price: 120,
    location: 'Seattle, WA',
    date: 'Apr 12, 2025',
    category: 'Cleaning',
    userName: 'Jamie L.',
    userAvatar: '',
    status: 'open' as const,
    description: 'Need a thorough deep cleaning for my 2-bedroom apartment including kitchen, bathrooms, and living areas. All cleaning supplies will be provided. Estimate 4-5 hours of work.'
  },
  {
    id: '3',
    title: 'Package pickup and delivery needed',
    price: 35,
    location: 'Chicago, IL',
    date: 'Apr 18, 2025',
    category: 'Delivery',
    userName: 'Taylor R.',
    userAvatar: '',
    status: 'assigned' as const,
    description: 'I need someone to pick up a package from the UPS store and deliver it to my home address. The package is small and lightweight. Should take about 30 minutes total.'
  },
  {
    id: '4',
    title: 'Dog walking service - twice daily',
    price: 60,
    location: 'Austin, TX',
    date: 'Apr 14-18, 2025',
    category: 'Pet Care',
    userName: 'Morgan P.',
    userAvatar: '',
    status: 'open' as const,
    description: 'Looking for someone to walk my golden retriever twice a day (morning and evening) for 5 days while I\'m away on business. Each walk should be around 20-30 minutes.'
  },
  {
    id: '5',
    title: 'Help needed with home network setup',
    price: 95,
    location: 'Virtual',
    date: 'Apr 13, 2025',
    category: 'Virtual Help',
    userName: 'Sam T.',
    userAvatar: '',
    status: 'completed' as const,
    description: 'Need technical assistance setting up a mesh WiFi network in my home. Looking for someone with networking experience who can help remotely via video call.'
  },
  {
    id: '6',
    title: 'Moving help - load and unload truck',
    price: 150,
    location: 'Denver, CO',
    date: 'Apr 20, 2025',
    category: 'Home Services',
    userName: 'Jordan K.',
    userAvatar: '',
    status: 'open' as const,
    description: 'Need 2 strong individuals to help load and unload a 15-foot moving truck. I\'ve already packed everything in boxes. Estimated 3-4 hours of work.'
  }
];
