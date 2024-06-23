import { tour } from '../interface/tour';
import { v4 as uuidv4, v4 } from 'uuid';
import { PrismaClient ,Tour} from '@prisma/client';

export class TourService {
  prisma = new PrismaClient({
    log: ['error']
  });

  async createTour(tour:tour) {
    let tour_id=v4()
    let response = await this.
    prisma.tour.create({
      data: {
        id:tour_id,
        destination: tour.destination,
        duration: tour.duration,
        price: tour.price,
        tourType: tour.tourType,
        description: tour.description,
        createdAt: new Date('2022-02-20'),
        updatedAt: new Date('2022-02-21'),
        isActive:true
      }
    });
    return {
      message: "Tour created successfully",
      response
    };
  }

  async getTourById(id: string) {
    return this.prisma.tour.findUnique({
      where: { id }
    });
  }

  async updateTour(id: string, tour: Partial<Omit<Tour, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>>) {
    let response = await this.prisma.tour.update({
      where: { id },
      data: tour
    });
    return {
      message: "Tour updated successfully",
      response
    };
  }

  async deleteTour(id: string) {
    let response = await this.prisma.tour.update({
      where: { id },
      data: { isActive: false }
    });
    return {
      message: "Tour deleted successfully",
      response
    };
  }

  async searchTours(query: string) {
    return this.prisma.tour.findMany({
      where: {
        OR: [
          { destination: { contains: query } },
          { tourType: { contains: query } }
        ]
      }
    });
  }
}
