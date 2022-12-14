import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  IGraphicsCard,
  IGraphicsCardCreateInput,
  IGraphicsCardUpdateInput,
  IGraphicsCardWhereUniqueInput,
} from './graphics-card.interface';

import { GraphicsCardService } from './graphics-card.service';

@Resolver(() => IGraphicsCard)
export class GraphicsCardResolver {
  constructor(private readonly graphicsCardService: GraphicsCardService) {}

  @Query(() => IGraphicsCard)
  async getGraphicsCard(@Args('id') id: number): Promise<IGraphicsCard> {
    return await this.graphicsCardService.getOne(id);
  }

  @Query(() => [IGraphicsCard], { nullable: true })
  async getGraphicsCards(): Promise<Array<IGraphicsCard>> {
    return await this.graphicsCardService.getAll();
  }

  @Mutation(() => IGraphicsCard, { nullable: true })
  async createGraphicsCard(@Args('data') data: IGraphicsCardCreateInput): Promise<IGraphicsCard> {
    return await this.graphicsCardService.create(data);
  }

  @Mutation(() => IGraphicsCard, { nullable: true })
  async updateGraphicsCard(
    @Args('where') where: IGraphicsCardWhereUniqueInput,
    @Args('data') data: IGraphicsCardUpdateInput,
  ): Promise<IGraphicsCard> {
    return await this.graphicsCardService.update(where, data);
  }

  @Mutation(() => IGraphicsCard, { nullable: true })
  async removeGraphicsCard(@Args('where') where: IGraphicsCardWhereUniqueInput): Promise<IGraphicsCard> {
    return await this.graphicsCardService.remove(where);
  }
}
