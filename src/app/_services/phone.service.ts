import { Injectable } from '@angular/core';
import { Phone } from '../_models/phone';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private baseurl:string="http://localhost:3000/phones";

  get_all_phone_numbers(){
    return this.http.get<Phone[]>(this.baseurl);
  }


  add_New_Phone_Number(NewPhone:Phone){
    return this.http.post<Phone>(this.baseurl,NewPhone);
  }

  Edit_Phone_Number_By_Id(id:string){
    return this.http.get<Phone>(this.baseurl+"/"+id)
  }

  update_Phone_Number_By_Id(EditObject:Phone){
    let name = EditObject.name;
    let phoneNumber = EditObject.phoneNumber;
    return this.http.put(this.baseurl+'/'+EditObject._id,{name,phoneNumber})
  }



  delete_Phone_Number_By_Id(id:string){
    return this.http.delete(this.baseurl+"/"+id)
  }

  constructor(
 
    private http: HttpClient
  ) { }
}
