import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loadingStatus: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  showLoader(): void {
    this.loadingStatus.next(true);
  }

  hideLoader(): void {
    this.loadingStatus.next(false);
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loadingStatus.asObservable();
  }
}
