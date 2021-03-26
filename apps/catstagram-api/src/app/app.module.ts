import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoriesModule } from '../domain/categories/categories.module';
import { BreedsModule } from '../domain/breeds/breeds.module';
import { ImagesModule } from '../domain/images/images.module';
import { FavouritesModule } from '../domain/favourites/favourites.module';
import { VotesModule } from '../domain/votes/votes.module';
import { UploadsModule } from '../domain/uploads/uploads.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    CategoriesModule,
    BreedsModule,
    ImagesModule,
    FavouritesModule,
    VotesModule,
    UploadsModule,
  ],
})
export class AppModule {}
