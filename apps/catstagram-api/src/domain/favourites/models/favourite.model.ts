import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Favourite {
  @Field(() => String)
  id: string;

  @Field(() => String)
  image_id: string;

  @Field(() => String, { nullable: true })
  sub_id?: string;

  @Field(() => Date)
  created_at: string;
}

@ObjectType()
export class EmbeddedFavourite {
  @Field(() => String)
  id: string;
}
