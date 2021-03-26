import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './models/favourite.model';
import { UnfavouriteResult } from './models/unfavourite.model';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(private favouritesService: FavouritesService) {}

  @Query(() => [Favourite])
  async favourites() {
    return this.favouritesService.findMany();
  }

  @Mutation(() => Favourite)
  async favourite(@Args('image_id') image_id: string) {
    return this.favouritesService.create(image_id);
  }

  @Mutation(() => UnfavouriteResult)
  async unfavourite(@Args('id', { type: () => String }) id: string) {
    return this.favouritesService.destroy(id);
  }
}
