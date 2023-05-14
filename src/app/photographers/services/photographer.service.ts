import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

import { PhotographerApiService } from '../../api/services/photographer-api.service';
import { LocalData } from '../interfaces/local-data.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotographerService {
  private _photographerData$: BehaviorSubject<LocalData>;

  constructor(private readonly photographerApiS: PhotographerApiService) {
    this._photographerData$ = new BehaviorSubject(
      JSON.parse(localStorage.getItem('photographer-data')!) ?? {
        results: [],
        allData: false,
      }
    );
  }

  public getPhotographers() {
    const data = this._photographerData$.getValue();
    const dataFullFiled = data.allData;

    const offset = data.results.length;

    return this.photographerApiS.getAll(offset).pipe(
      tap((results) => {
        data.results = data.results.concat(results);
        if (results.length === 0) data.allData = true;
        this._photographerData$.next(data);
        localStorage.setItem('photographer-data', JSON.stringify(data));
      })
    );
  }
  /*   public getPhotographerById(id: number): void {

    const data = this._photographerData$.getValue()
    const dataFullFiled = data.allData
    
    if (!dataFullFiled) {

      const offset = data.results.length
      
      this.photographerApiS.getAll(offset).subscribe(
        results => {
          data.results = data.results.concat(results)
          if (results.length === 0) data.allData = true
          this._photographerData$.next(data)
          localStorage.setItem('photographer-data', JSON.stringify(data))
        }
        )
      }
    
  } */

  public loadPhotographers(): BehaviorSubject<LocalData> {
    return this._photographerData$;
  }
}
