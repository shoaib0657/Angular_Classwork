import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    const headers1 = new HttpHeaders().set(
      "x-access-token", '' + localStorage.getItem("VNITtoken")
    );
  
    return this.http.get('http://109.106.255.69:2208/contact/getAllContactByStudentId/' + localStorage.getItem("VNITid"), {
      headers: headers1
    });
  }


  //complete this function
  add(data: any): Observable<any> {
    //use the token in post request
    const headers1 = new HttpHeaders().set(
      "x-access-token", '' + localStorage.getItem("VNITtoken")
    );

    // this.http.post(url, data, headers)
    const url = 'http://109.106.255.69:2208/contact/addContact';
    return this.http.post(url, data, {
      headers: headers1
    });
  
  }

  edit(contact: any): Observable<any>{
    const headers1 = new HttpHeaders().set(
      "x-access-token", '' + localStorage.getItem("VNITtoken")
    );

    const url = 'http://109.106.255.69:2208/contact/updateContactById/' + contact.id;
    // this.http.put(url, data, headers)
    return this.http.put(url,
      contact, {
      headers: headers1
    });
  }

  delete(contactId: number): Observable<any> {
    const headers1 = new HttpHeaders().set(
      "x-access-token", '' + localStorage.getItem("VNITtoken")
    );

    const url = 'http://109.106.255.69:2208/contact/deleteContactById/' + contactId;

    return this.http.delete(url, {
      headers: headers1
    });
  }
  // this.http.delete(url, data, headers)
}