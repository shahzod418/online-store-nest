import { Injectable } from '@nestjs/common';
import { GraphicsCard } from './graphics-card.model';

const graphicsCard: GraphicsCard[] = [
  {
    id: 1,
    name: 'GTX 3090',
    vendor: 'NVIDIA',
  },
  {
    id: 2,
    name: 'GTX 3080',
    vendor: 'NVIDIA',
  },
];

@Injectable()
export class GraphicsCardService {
  async getOne(id: number): Promise<GraphicsCard> {
    return graphicsCard.find(card => card.id === id);
  }

  async getAll(): Promise<GraphicsCard[]> {
    return graphicsCard;
  }
}
