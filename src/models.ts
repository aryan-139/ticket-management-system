// Ticket Booking Models

export interface TicketBookingRequest {
  eventId: string;
  eventName: string;
  customerInfo: CustomerInfo;
  ticketDetails: TicketDetails;
  paymentInfo: PaymentInfo;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
}

export interface TicketDetails {
  ticketType: 'general' | 'vip' | 'premium' | 'student' | 'senior';
  quantity: number;
  seatPreference?: 'front' | 'middle' | 'back' | 'any';
  specialRequests?: string;
}

export interface PaymentInfo {
  paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  billingAddress: BillingAddress;
}

export interface BillingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface BookedTicket {
  id: string;
  bookingReference: string;
  eventId: string;
  eventName: string;
  customerInfo: CustomerInfo;
  ticketDetails: TicketDetails;
  paymentInfo: Omit<PaymentInfo, 'cardNumber' | 'cvv'>; // Exclude sensitive data
  status: 'confirmed' | 'pending' | 'cancelled' | 'refunded';
  totalAmount: number;
  bookingDate: string;
  eventDate: string;
  venue: string;
  qrCode?: string;
}

export interface BookingResponse {
  success: boolean;
  data?: BookedTicket;
  message: string;
  bookingReference?: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string; //time should always be GMT 
  localTime: string;
  venue: string;
  availableTickets: number;
  ticketTypes: TicketType[];
}

export interface TicketType {
  type: 'general' | 'vip' | 'premium' | 'student' | 'senior';
  price: number;
  available: number;
  description: string;
}
