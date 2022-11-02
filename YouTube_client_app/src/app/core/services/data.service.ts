import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { IData } from 'src/app/shared/models/models.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly SEARCH_URL = 'search';
  private readonly VIDEOS_URL = 'videos';
  private readonly LIMIT = 10;

  constructor(private http: HttpClient) { }

  getData(page: number = 1) {
    const params = new HttpParams()
      .set('key', 'AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0')
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', (page * this.LIMIT).toString())
      .set('q', 'js');

    // 'search?key=AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0&type=video&part=snippet&maxResults=1&q=js'

    return this.http.get<IData>(this.SEARCH_URL, { params })
    .pipe(
      retry(4), // повторить попытку 4 раза
/*       map(courses => ({
        courses,
        hasMoreCourses: courses.length === this.LIMIT
      })), */
    )
  }

}
