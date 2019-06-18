import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Character } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class CharactersService {
  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
    return this.apiService.get('/api/characters')
      .pipe(map(data => data));
  }

  get(slug: string): Observable<Character> {
    return this.apiService.get('/characters/' + slug)
      .pipe(map(data => data));
  }
}
