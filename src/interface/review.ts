export interface review {
  id: string;
  userId: string;
  tourId: string;
  reviewDate: Date;
  rating: number;
  comment?: string;
  isActive: boolean;
}
