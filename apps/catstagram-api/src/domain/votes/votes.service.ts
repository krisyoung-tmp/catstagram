import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vote } from './models/vote.model';

@Injectable()
export class VotesService {
  constructor(private readonly http: HttpService) {}

  public async findMany(): Promise<Observable<Vote[]>> {
    return this.http.get('/votes').pipe(map((res) => res.data));
  }

  public async create(
    image_id: string,
    value: number
  ): Promise<Observable<Vote>> {
    return this.http
      .post('/votes', { image_id, value, sub_id: '__mock__' })
      .pipe(map((res) => ({ ...res.data, image_id, value })));
  }

  public async destroy(id: string): Promise<Observable<string>> {
    return this.http
      .delete(`/votes/${id}`)
      .pipe(map((res) => ({ ...res.data, id })));
  }
}
