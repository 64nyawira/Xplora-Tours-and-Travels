import { PrismaClient,} from '@prisma/client';
import { v4 as uuidv4, v4 } from 'uuid';
import { review } from '../interface/review';

export class ReviewService {
  prisma = new PrismaClient({
    log: ['error']
  });

  async createReview(review:review) {
    let review_id= v4()
    let response = await this.prisma.review.create({
      data: {
        id:review_id,
        userId: review.userId,
        tourId: review.tourId,
        reviewDate: new Date(),
        rating: review.rating,
        comment: review.comment,
        isActive: true
      }
    });
    return {
      message: "Review created successfully",
      response
    };
  }
}
