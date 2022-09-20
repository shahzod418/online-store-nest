import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Graphics card ' })
export class GraphicsCard {
  @Field(type => ID)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  vendor: string;
}
