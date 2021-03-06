import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../_models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/user`).pipe(map(res => {
          const userList: User[] = [];
          for (const u of res.content) {
            userList.push(new User(u));
          }
          return userList;
        }));
    }

    delete(id: number) {
      return this.http.delete<any>(`${environment.apiUrl}/user/${id}`).pipe(map(res => {
        return res;
    }));
    }
}
