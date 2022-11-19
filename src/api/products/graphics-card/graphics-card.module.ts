import { Module } from '@nestjs/common';
import { GraphicsCardResolver } from './graphics-card.resolver';
import { GraphicsCardService } from './graphics-card.service';

@Module({
  providers: [GraphicsCardService, GraphicsCardResolver],
})
export class GraphicsCardModule {}
