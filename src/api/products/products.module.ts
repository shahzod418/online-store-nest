import { Module } from '@nestjs/common';
import { GraphicsCardModule } from './graphics-card/graphics-card.module';

@Module({
  imports: [GraphicsCardModule],
})
export class ProductsModule {}
