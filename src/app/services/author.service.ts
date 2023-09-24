  import { Injectable } from '@angular/core';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { AuthorSearch } from '../model/author-search';
  import { AuthorDetail } from '../model/author-detail';
import { AuthorWorks } from '../model/author-works';
  @Injectable({
    providedIn: 'root'
  })
  export class AuthorService {
    private apiUrl='https://openlibrary.org/search/authors.json';
    constructor(private http:HttpClient) { }

    searchAuthors(query: string, limit: number, offset: number): Observable<AuthorSearch> {
      
      const params = new HttpParams()
        .set('q', query)
        .set('limit', limit.toString())
        .set('offset', offset.toString());

      return this.http.get<AuthorSearch>(this.apiUrl, { params });
    }
    getAuthorDetails(authorKey: string): Observable<AuthorDetail> {
      const authorDetailUrl = `https://openlibrary.org/authors/${authorKey}.json`;
      return this.http.get<AuthorDetail>(authorDetailUrl);
    }
    getAuthorWorks(authorKey: string): Observable<AuthorWorks> {
      const worksUrl = `https://openlibrary.org/authors/${authorKey}/works.json`;
      return this.http.get<AuthorWorks>(worksUrl);
    }
  }
