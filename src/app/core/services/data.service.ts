import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, retry, switchMap } from 'rxjs/operators';
import { IData, IItem } from 'src/app/shared/models/models.component';
import { mergeMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { ResponseCards } from 'src/app/redux/reducers/youtube.redux';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly SEARCH_URL = 'search';
  private readonly VIDEOS_URL = 'videos';
  private readonly LIMIT = 12;

  constructor(private http: HttpClient) { };

  getDataWithStatistic() {

    return this.getData()
      .pipe(
        map((responce: ResponseCards) => {
          let idArrResponce: string[] = [];
          responce.items.forEach(card => idArrResponce.push(card.id.videoId));
          return idArrResponce;
        })
      ).pipe(
        mergeMap((id) => {
          return this.getDataAndStatistics(id);
        })
      )
    // .subscribe( (data) => console.log( 'DATASERVICE', data));


    /*     this.getDataAndStatistics(this.idArrResponce).subscribe(cards => {
          this.cardsResponceAndStatistics = cards.items;
          console.log('MY CARDS', cards.items)
        }); */
  }

  /*   this.getData().subscribe( (responce) => {
      this.cardsResponce = responce.items;
      this.cardsResponce.forEach(card => this.idArrResponce.push(card.id.videoId));
    });
    this.getDataAndStatistics(this.idArrResponce).subscribe(cards => {
      this.cardsResponceAndStatistics = cards.items;
      console.log( 'MY CARDS' ,cards.items)
    }); */

  getData(page: number = 1) {
    const params = new HttpParams()
      .set('key', 'AIzaSyA8THAXXxb7zhijo6nauZqbK9mwl_D397E')
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', (page * this.LIMIT).toString())
      .set('q', 'js');

    // 'search?key=AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0&type=video&part=snippet&maxResults=1&q=js'
    // 'AIzaSyCglrs4yuWE6aVxAzlnsTG_bBTTo3aDJSY'  - Женя
    // 'AIzaSyA8THAXXxb7zhijo6nauZqbK9mwl_D397E' - последний
    // исправить тип                                                                                to do 
    return this.http.get<ResponseCards>(this.SEARCH_URL, { params })
      .pipe(
        retry(4),// повторить попытку 4 раза
        /*       map(courses => ({
                courses,
                hasMoreCourses: courses.length === this.LIMIT
              })), */
        // map(), 
      )
  }

  getDataAndStatistics(idArr: string[]) {
    const idString: string = idArr.join();
    const params = new HttpParams()
      .set('key', 'AIzaSyA8THAXXxb7zhijo6nauZqbK9mwl_D397E')
      .set('type', 'video')
      .set('id', idString)
      .set('part', 'snippet,statistics')
      .set('maxResults', '12')
      .set('q', 'js');

    return this.http.get<IData>(this.VIDEOS_URL, { params })
      .pipe(
        retry(4),
      )
  }
  // getDataWithStatisti() вызываем 1 метод, 2 метод =  помещаем в общей объект и отправляем в стор или редюсер 
  // через промисы сделать 
}