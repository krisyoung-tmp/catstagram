import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UnfavouriteResult {
  @Field(() => String)
  id: string;

  @Field(() => String)
  message: string;
}
