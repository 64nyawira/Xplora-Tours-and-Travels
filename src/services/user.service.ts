import { PrismaClient, User, Users } from '@prisma/client';
import { v4 as uuidv4, v4 } from 'uuid';
import { user } from '../interface/user';
import bcrypt from 'bcryptjs'


export class UserService {
  prisma = new PrismaClient({
    log: ['error']
  });

  async createUser(user:user) {
    let user_id=v4()
    let hashedPwd= bcrypt.hashSync(user.password,6)
    let response = await this.prisma.users.create({
      data: {
        id:user_id,
        name: user.name,
        image: user.image,
        email: user.email,
        password: user.password,
        phone_no: user.phone_no,
        // // createdAt:user.createdAt,
        // // updatedAt: user.updatedAt,
        // role: user.role
      }
    });
    return {
      message: "User created successfully",
      response
    };
  }

  async getUserById(id: string) {
    return this.prisma.users.findUnique({
      where: { id }
    });
  }

  async updateUser(id: string, user: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>) {
    let response = await this.prisma.users.update({
      where: { id },
      data: user
    });
    return {
      message: "User updated successfully",
      response
    };
  }

  async deleteUser(id: string) {
    let response = await this.prisma.users.delete({
      where: { id }
    });
    return {
      message: "User deleted successfully",
      response
    };
  }
}
