import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../model/post-response';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private host = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getTimelinePosts(
    page: number,
    size: number,
    allPost: boolean
  ): Observable<PostResponse[] | HttpErrorResponse> {
    const reqParams = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('allPost', allPost);
    return this.httpClient.get<PostResponse[] | HttpErrorResponse>(
      `${this.host}/`,
      { params: reqParams }
    );
  }

  getTimelineTags(): Observable<Tag[] | HttpErrorResponse> {
    return this.httpClient.get<Tag[] | HttpErrorResponse>(`${this.host}/tags`);
  }
}
