import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as FormData from 'form-data';

@Injectable()
export class UploadsService {
  constructor(private readonly http: HttpService) {}

  public async upload(file): Promise<unknown> {
    const formData = new FormData();
    formData.append('file', file.buffer, { filename: file.originalname });
    formData.append('sub_id', '__mock__');
    const headers = {
      ...formData.getHeaders(),
      'Content-Length': formData.getLengthSync(),
    };
    return this.http
      .post('/images/upload', formData, { headers })
      .pipe(map((res) => res.data))
      .toPromise();
  }
}
