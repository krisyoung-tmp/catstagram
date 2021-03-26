import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ImagesService } from './images.service';
import { Image } from './models/image.model';
import { PaginatedImagesResultDto } from './dtos/paginated-images.dto';

@Resolver(() => Image)
export class ImagesResolver {
  constructor(private imagesService: ImagesService) {}

  @Query(() => PaginatedImagesResultDto)
  async images(
    userUploads: boolean,
    @Args('limit', { type: () => Int, defaultValue: 20 }) limit: number,
    @Args('offset', { type: () => Int, defaultValue: 0 }) offset: number,
    @Args('categories', { type: () => [Int], defaultValue: [] })
    categories: number[],
    @Args('breeds', { type: () => [String], defaultValue: [] }) breeds: number[]
  ) {
    const page = Math.floor(offset / limit);
    const result = await this.imagesService.findMany({
      page,
      limit,
      categories,
      breeds,
    });
    const hasNextPage = (result.page + 1) * result.limit < result.count;
    const hasPreviousPage = result.page > 0;

    return {
      totalCount: result.count,
      pageInfo: {
        offset: result.page * result.limit,
        limit: result.limit,
        hasNextPage,
        hasPreviousPage,
      },
      edges: result.data.map((node) => ({ node })),
    };
  }
}
