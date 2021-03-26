import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
