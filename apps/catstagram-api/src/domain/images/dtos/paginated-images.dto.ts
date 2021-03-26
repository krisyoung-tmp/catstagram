import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Image } from '../models/image.model';

@ObjectType()
class PageInfo {
  @Field(() => Int)
  offset: number;
  @Field(() => Int)
  limit: number;
  @Field(() => Boolean)
  hasNextPage: boolean;
  @Field(() => Boolean)
  hasPreviousPage: boolean;
}

@ObjectType()
class ImageEdge {
  @Field(() => Image)
  node: Image;
}

@ObjectType()
export class PaginatedImagesResultDto {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [ImageEdge])
  edges: ImageEdge[];
}
