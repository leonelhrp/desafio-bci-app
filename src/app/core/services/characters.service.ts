import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Character, CharacterListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class CharactersService {
  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
    return this.apiService.get('/characters')
          .pipe(map(data => data.characters));
  }

  get(slug): Observable<Character> {
    return this.apiService.get('/characters/' + slug)
      .pipe(map(data => data.characters));
  }
}
