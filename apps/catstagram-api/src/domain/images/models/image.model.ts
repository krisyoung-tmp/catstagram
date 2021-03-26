import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from '../../categories/models/category.model';
import { Breed } from '../../breeds/models/breed.model';
import { EmbeddedFavourite } from '../../favourites/models/favourite.model';
import { EmbeddedVote } from '../../votes/models/vote.model';

@ObjectType()
export class Image {
  @Field(() => String)
  id: string;

  @Field(() => String)
  url?: string;

  @Field(() => [Category], { nullable: true, defaultValue: [] })
  categories: Category[];

  @Field(() => [Breed], { nullable: true, defaultValue: [] })
  breeds: Breed[];

  @Field(() => EmbeddedFavourite, { nullable: true })
  favourite: EmbeddedFavourite;

  @Field(() => EmbeddedVote, { nullable: true })
  vote: EmbeddedVote;
}
