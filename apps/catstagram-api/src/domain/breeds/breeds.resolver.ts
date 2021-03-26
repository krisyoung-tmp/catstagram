import { Resolver, Query } from '@nestjs/graphql';
import { BreedsService } from './breeds.service';
import { Breed } from './models/breed.model';

@Resolver(() => Breed)
export class BreedsResolver {
  constructor(private BreedsService: BreedsService) {}

  @Query(() => [Breed])
  async breeds() {
    return this.BreedsService.findMany();
  }
}
