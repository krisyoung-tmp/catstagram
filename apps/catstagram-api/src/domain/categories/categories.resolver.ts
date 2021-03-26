import { Resolver, Query } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './models/category.model';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Query(() => [Category])
  async categories() {
    return this.categoriesService.findMany();
  }
}
