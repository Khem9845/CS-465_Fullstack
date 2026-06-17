import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) { }

  private localStorage = this.document.defaultView?.localStorage;

  public login(user: any): Promise<any> {
    return this.http
      .post('http://localhost:3000/api/login', user)
      .toPromise();
  }

  public register(user: any): Promise<any> {
    return this.http
      .post('http://localhost:3000/api/register', user)
      .toPromise();
  }

  public logout(): void {
    this.localStorage?.removeItem('travlr-token');
  }

  public saveToken(token: string): void {
    this.localStorage?.setItem('travlr-token', token);
  }

  public getToken(): string | null {
    return this.localStorage?.getItem('travlr-token') ?? null;
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > (Date.now() / 1000);
  }

  public getCurrentUser(): any {
    if (!this.isLoggedIn()) return null;
    const token = this.getToken()!;
    return JSON.parse(atob(token.split('.')[1]));
  }
}