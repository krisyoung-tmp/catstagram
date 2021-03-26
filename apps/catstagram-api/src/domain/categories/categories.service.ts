import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Category } from './models/category.model';

@Injectable()
export class CategoriesService {
  constructor(private readonly http: HttpService) {}

  public async findMany(): Promise<Category> {
    return this.http
      .get(`/categories`)
      .pipe(map((res) => res.data))
      .toPromise();
  }
}
