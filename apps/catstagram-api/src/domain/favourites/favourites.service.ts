import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Favourite } from './models/favourite.model';

@Injectable()
export class FavouritesService {
  constructor(private readonly http: HttpService) {}

  public async findMany(): Promise<Observable<Favourite[]>> {
    return this.http
      .get('/favourites?sub_id=__mock__')
      .pipe(map((res) => res.data));
  }

  public async create(image_id: string): Promise<Observable<Favourite>> {
    return this.http
      .post('/favourites', { image_id, sub_id: '__mock__' })
      .pipe(map((res) => ({ ...res.data, image_id })));
  }

  public async destroy(id: string): Promise<Observable<string>> {
    return this.http
      .delete(`/favourites/${id}`)
      .pipe(map((res) => ({ ...res.data, id })));
  }
}
