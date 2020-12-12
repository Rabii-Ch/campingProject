import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allUsers`);

  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userUrl}/deleteUsers/${id}`);
  }
  addUser(user: any) {
    
    return this.httpClient.post(`${this.userUrl}/addUser`, user);
  }
  editUser(user: any) {   
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`, user);
  }
  getUserById(id: string) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/displayUser/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }

  login(user:any){
    return this.httpClient.post<{user:any}>(`${this.userUrl}/login`,user);
  }
}
