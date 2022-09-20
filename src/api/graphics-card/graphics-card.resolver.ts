import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { GraphicsCard } from './graphics-card.model';
import { GraphicsCardService } from './graphics-card.service';

@Resolver(of => GraphicsCard)
export class GraphicsCardResolver {
  constructor(private readonly graphicsCardService: GraphicsCardService) {}

  @Query(returns => GraphicsCard)
  async graphicsCard(@Args('id') id: number): Promise<GraphicsCard> {
    const graphicsCard = await this.graphicsCardService.getOne(id);

    if (!graphicsCard) {
      throw new NotFoundException(id);
    }

    return graphicsCard;
  }

  @Query(returns => [GraphicsCard])
  async graphicsCards(): Promise<GraphicsCard[]> {
    return await this.graphicsCardService.getAll();
  }
}
