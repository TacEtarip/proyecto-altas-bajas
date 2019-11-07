import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, mapTo, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_JWT = 'Token_JWT';
  private readonly TOKEN_REFRESH = 'Token_REFRESH';
  private readonly USUARIO_DNI = 'Usuario_DNI';

  private logedInUser = null;

  private BASE_URL = 'http://localhost:7651/auth';

  constructor(private http: HttpClient) { }

  login(user): Observable<boolean> {

    return this.http.post<Token>('http://localhost:7651/auth/login', user)
      .pipe(
        tap((res: Token) => this.doLoginUser(res)),
        mapTo(true),
        catchError(error => {
          console.log(error.status);
          switch (error.status) {
            case 0:
              alert('Error al tratar de conectar al servidor');
              break;
            case 700:
              break;
            default:
              alert('Error al tratar de compropar credenciales');
              break;
          }
          return of(false);
        })
      );
  }

  logOut() {
    return this.http.post<any>('http://localhost:7651/auth/logout',
      { refreshToken: this.getRefreshToken() }).pipe(
        tap(() => this.doLogOutUser()),
        mapTo(true),
        catchError(error => {
          alert('hola?');
          return of(false);
        })
      );
  }

  refreshToken() {
    console.log('1');
    const x = { refreshToken: this.getRefreshToken() };
    console.log(x);
    return this.http.post<any>('http://localhost:7651/auth/refresh',
      x).pipe(
        tap((res: TokenRefresh) => this.storeNewToken(res.tokenRefreshed))
      );
  }

  storeNewToken(tokenRefreshed: string) {
    localStorage.setItem(this.TOKEN_JWT, tokenRefreshed);
  }

  private doLogOutUser() {
    this.getLoggedUserDNI = null;
    localStorage.removeItem(this.USUARIO_DNI);
    this.removeTokens();
  }
  private removeTokens() {
    localStorage.removeItem(this.TOKEN_JWT);
    localStorage.removeItem(this.TOKEN_REFRESH);
  }
  private doLoginUser(res: Token) {
    if (res.succes === true) {
      localStorage.setItem(this.USUARIO_DNI, res.dni);
      this.logedInUser = res.dni;
      this.storeToken(res.token, res.refreshToken);
    } else {
      return;
    }
  }

  private storeToken(token: string, refreshToken: string) {
    localStorage.setItem(this.TOKEN_JWT, token);
    localStorage.setItem(this.TOKEN_REFRESH, refreshToken);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.TOKEN_REFRESH);
  }

  getJwtToken() {

    return localStorage.getItem(this.TOKEN_JWT);

  }

  isLogedIn() {
    return !!localStorage.getItem(this.TOKEN_JWT);
  }

  getLoggedUserDNI() {
    return this.logedInUser;
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    throwError('try again');
    return of(false);
  }
}
interface Token { succes: boolean; dni: string; token: string; refreshToken: string; }
interface TokenRefresh { tokenRefreshed: string; }
