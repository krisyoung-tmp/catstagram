import { Resolver, Int, Query, Mutation, Args } from '@nestjs/graphql';
import { VotesService } from './votes.service';
import { Vote } from './models/vote.model';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private VotesService: VotesService) {}

  @Query(() => [Vote])
  async votes() {
    return this.VotesService.findMany();
  }

  @Mutation(() => Vote)
  async vote(
    @Args('image_id') image_id: string,
    @Args('value', { type: () => Int }) value: number
  ) {
    return this.VotesService.create(image_id, value);
  }
}
