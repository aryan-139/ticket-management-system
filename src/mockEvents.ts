import { Event } from './models';

// Mock data for events
export const mockEvents: Event[] = [
    {
      id: 'event-1',
      name: 'Summer Music Festival 2024',
      description: 'A spectacular music festival featuring top artists',
      date: '2024-07-15',
      time: '18:00',
      localTime: '18:00',
      venue: 'Central Park Amphitheater',
      availableTickets: 500,
      ticketTypes: [
        { type: 'general', price: 75, available: 300, description: 'General admission ticket' },
        { type: 'vip', price: 150, available: 100, description: 'VIP access with premium seating' },
        { type: 'premium', price: 250, available: 50, description: 'Premium package with backstage access' },
        { type: 'student', price: 45, available: 50, description: 'Student discount ticket (ID required)' }
      ]
    },
    {
      id: 'event-2',
      name: 'Tech Conference 2024',
      description: 'Annual technology conference with industry leaders',
      date: '2024-08-20',
      time: '09:00',
      localTime: '09:00',
      venue: 'Convention Center',
      availableTickets: 200,
      ticketTypes: [
        { type: 'general', price: 120, available: 150, description: 'General conference access' },
        { type: 'vip', price: 200, available: 30, description: 'VIP with networking lunch' },
        { type: 'student', price: 60, available: 20, description: 'Student discount ticket' }
      ]
    }
  ];