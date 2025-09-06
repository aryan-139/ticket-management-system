import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { 
  TicketBookingRequest, 
  BookedTicket, 
  BookingResponse,
  Event,
  TicketType 
} from './models';
import { mockEvents } from './mockEvents';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Get available events
app.get('/api/events', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: mockEvents,
    count: mockEvents.length
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎫 Events API: http://localhost:${PORT}/api/events`);
  console.log(`🎫 Book tickets: http://localhost:${PORT}/api/tickets/book`);
});

export default app;
