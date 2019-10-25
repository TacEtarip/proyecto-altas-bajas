import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, mapTo, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_JWT = 'Token_JWT';

  private logedInUser = null;

  private BASE_URL = 'http://localhost:7651/auth';

  constructor(private http: HttpClient) { }

  register(user): Observable<boolean> {

    /*return this.http.post<Token>('http://localhost:7651/auth/register', user)
      .pipe(map((res: Token) => {
        return res.token;
      }))
      .subscribe(
        (res) => {
          localStorage.setItem('token', res);
        }
      );
  }*/

    /* this.http.post<Token>('http://localhost:7651/auth/register', user)
       .pipe()
       .subscribe(
         (res: Token) => {
           localStorage.setItem('token', res.token);
         }
       );
       */

    return this.http.post<Token>('http://localhost:7651/auth/register', user)
      .pipe(
        tap((res: Token) => this.doLoginUser(user.user, res.token)),
        mapTo(true),
        catchError(this.handleError)
      );
  }

  doLoginUser(userDNI, token: string) {
    this.logedInUser = userDNI;
    localStorage.setItem('usuario', userDNI);
    this.storeToken(token);
  }

  storeToken(token: string) {
    localStorage.setItem(this.TOKEN_JWT, token);
  }

  isLogedIn() {
    return !!localStorage.getItem(this.TOKEN_JWT);
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return of(false);
  }
}
export interface Token { token: string; }
