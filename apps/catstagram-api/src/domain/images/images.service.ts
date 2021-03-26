import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Image } from './models/image.model';

interface PagedResponse<Entity> {
  page: number;
  count: number;
  limit: number;
  data: Entity[];
}

@Injectable()
export class ImagesService {
  constructor(private readonly http: HttpService) {}

  public async findMany({
    limit = 20,
    page = 1,
    categories = [],
    breeds = [],
  }): Promise<PagedResponse<Image>> {
    const params = [
      ['sub_id', '__mock__'],
      ['limit', limit],
      ['page', page],
      ['size', 'thumb'],
      ['category_ids', categories],
      ['breed_ids', breeds],
      ['order', 'DESC'],
      ['include_vote', 1],
      ['include_favourite', 1],
    ]
      .map(([key, val]) => `${key}=${Array.isArray(val) ? val.join(',') : val}`)
      .join('&');
    return this.http
      .get(`/images/search?${params}`)
      .pipe(
        map((res) => {
          const count = res.headers['pagination-count'];
          const limit = res.headers['pagination-limit'];
          const page = res.headers['pagination-page'];

          return {
            page: Number(page),
            count: Number(count),
            limit: Number(limit),
            data: res.data,
          };
        })
      )
      .toPromise();
  }
}
