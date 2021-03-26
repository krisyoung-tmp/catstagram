import { Module, HttpModule } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesResolver } from './images.resolver';
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
  providers: [ImagesResolver, ImagesService],
})
export class ImagesModule {}
