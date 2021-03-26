import { Module, HttpModule } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';
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
  providers: [VotesResolver, VotesService],
})
export class VotesModule {}
