import { Injectable } from '@nestjs/common';

import { PrismaService } from '@database/prisma.service';

import type {
  IGraphicsCard,
  IGraphicsCardCreateInput,
  IGraphicsCardUpdateInput,
  IGraphicsCardWhereUniqueInput,
} from './graphics-card.interface';

@Injectable()
export class GraphicsCardService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: number): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.findUniqueOrThrow({ where: { id } });
  }

  async getAll(): Promise<Array<IGraphicsCard>> {
    return await this.prisma.graphicsCard.findMany();
  }

  async create(data: IGraphicsCardCreateInput): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.create({ data });
  }

  async update(where: IGraphicsCardWhereUniqueInput, data: IGraphicsCardUpdateInput): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.update({ data, where });
  }

  async remove(where: IGraphicsCardWhereUniqueInput): Promise<IGraphicsCard> {
    return await this.prisma.graphicsCard.delete({ where });
  }
}
