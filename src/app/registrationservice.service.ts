import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private http:HttpClient) { }
  insertData(registration){
    return this.http.post('http://localhost:3000/register_data',registration);
  }
  checklogin(login_forminput_data){
    return this.http.post('http://localhost:3000/login_check', login_forminput_data);
  }
  list_user(userdata) {
    return this.http.post('http://localhost:3000/list_users', userdata);
  }
  delete_user(deleteuser) {
    return this.http.post('http://localhost:3000/delete', deleteuser);
  }

}
