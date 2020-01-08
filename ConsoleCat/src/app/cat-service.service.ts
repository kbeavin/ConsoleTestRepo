import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  name: string
}

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://localhost:44376/api/cat')
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('https://localhost:44376/api/cat/' + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:44376/api/cats/', cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      'http://localhost:44376/api/cats/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:44376/api/cats/' + name)
  }
}
