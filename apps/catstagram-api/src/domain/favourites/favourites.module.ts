import { Module, HttpModule } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        baseURL: 'https://api.thecatapi.com/v1',
        headers: {
          ['X-Api-Key']: config.get<string>('API_KEY'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
