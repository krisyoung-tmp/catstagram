import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Breed {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
