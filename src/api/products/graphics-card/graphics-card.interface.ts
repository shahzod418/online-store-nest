import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { GraphicsCard, Prisma } from '@prisma/client';

@ObjectType()
export class IGraphicsCard implements GraphicsCard {
  @Field(() => ID)
  id: number;

  @Field({ nullable: false })
  model: string;

  @Field({ nullable: false })
  vendor: string;
}

@InputType()
export class IGraphicsCardCreateInput implements Prisma.GraphicsCardCreateInput {
  @Field()
  model: string;

  @Field()
  vendor: string;
}

@InputType()
export class IGraphicsCardUpdateInput implements Prisma.GraphicsCardUpdateInput {
  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  vendor?: string;
}

@InputType()
export class IGraphicsCardWhereUniqueInput implements Prisma.GraphicsCardWhereUniqueInput {
  @Field()
  id: number;
}
