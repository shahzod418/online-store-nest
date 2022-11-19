import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  IGraphicsCard,
  IGraphicsCardCreateInput,
  IGraphicsCardUpdateInput,
  IGraphicsCardWhereUniqueInput,
} from './graphics-card.interface';

@Injectable()
export class GraphicsCardService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: number): Promise<IGraphicsCard | null> {
    return await this.prisma.graphicsCard.findUnique({ where: { id } });
  }

  async getAll(): Promise<IGraphicsCard[]> {
    return await this.prisma.graphicsCard.findMany();
  }

  async create(data: IGraphicsCardCreateInput): Promise<IGraphicsCard | null> {
    return await this.prisma.graphicsCard.create({ data });
  }

  async update(where: IGraphicsCardWhereUniqueInput, data: IGraphicsCardUpdateInput): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.update({ data, where });
  }

  async remove(where: IGraphicsCardWhereUniqueInput): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.delete({ where });
  }
}
