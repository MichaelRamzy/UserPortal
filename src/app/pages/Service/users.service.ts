import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from 'src/app/shared/interfaces/Users.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://reqres.in';
  private filterValueSubject = new BehaviorSubject<string>('');
  filterValue$: Observable<string> = this.filterValueSubject.asObservable();

  constructor(private http: HttpClient,private _snackBar : MatSnackBar) {}

  getAllUsers(page : number):Observable<Users>{
    return this.http.get<Users>(`${this.baseUrl}/api/users?page=${page}`)
  }

  setFilterValue(filterValue: string) {
    this.filterValueSubject.next(filterValue.trim().toLowerCase());
  }
  openSnackBar(message :  string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 4000,
    });
  }
}
