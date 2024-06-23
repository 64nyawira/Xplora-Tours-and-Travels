import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4, v4 } from 'uuid';
import { booking } from '../interface/booking';

export class BookingService {
  prisma = new PrismaClient({
    log: ['error']
  });

  async createBooking(booking:booking) {
    let book_id= v4()
    let response = await this.prisma.booking.create({
      data: {
        id:book_id,
        userId: booking.userId,
        tourId: booking.tourId,
        bookingDate: new Date(),
        status: booking.status,
        totalPrice: booking.totalPrice,
      }
    });
    return {
      message: "Booking created successfully",
      response
    };
  }
}
