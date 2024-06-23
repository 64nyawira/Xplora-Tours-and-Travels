export interface user {
    id: string
    name: string
    image: string
    email: string
    password: string
    phone_no: string
    createdAt: Date
    updatedAt: Date
    role: Role;
  }
  
  export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  