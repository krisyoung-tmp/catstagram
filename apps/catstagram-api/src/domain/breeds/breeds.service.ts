import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Breed } from './models/breed.model';

@Injectable()
export class BreedsService {
  constructor(private readonly http: HttpService) {}

  public async findMany(): Promise<Breed> {
    return this.http
      .get(`/breeds`)
      .pipe(map((res) => res.data))
      .toPromise();
  }
}
