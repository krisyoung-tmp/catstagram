import { Module, HttpModule } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule, MulterModule],
      useFactory: async (config: ConfigService) => ({
        baseURL: 'https://api.thecatapi.com/v1',
        headers: {
          ['Content-Type']: 'multipart/form-data',
          ['X-Api-Key']: config.get<string>('API_KEY'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
