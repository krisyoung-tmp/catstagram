import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  NotAcceptableException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    try {
      const res = await this.uploadsService.upload(file);
      return res;
    } catch (err) {
      throw new NotAcceptableException({
        message:
          'Image was too big, did not contain a Cat, was inappropriate, or the wrong file type.',
      });
    }
  }
}
