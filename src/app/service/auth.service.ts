import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl='http://localhost:3000/user';

  getAll() {
    return this.http.get(this.apiurl)
  }

  getUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }

  updateUser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

  ProceedRegister(code: any, inputdata: any) {
    return this.http.post(this.apiurl+'/'+code, inputdata);
  }

  userRegistration(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }

  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }

  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
