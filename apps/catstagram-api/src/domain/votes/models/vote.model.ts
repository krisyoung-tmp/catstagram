import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Vote {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  value: number;

  @Field(() => String)
  image_id: string;

  @Field(() => String, { nullable: true })
  sub_id?: string;

  @Field(() => Date)
  created_at: string;

  @Field(() => String, { nullable: true })
  country_code?: string;
}

@ObjectType()
export class EmbeddedVote {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  value: number;
}
