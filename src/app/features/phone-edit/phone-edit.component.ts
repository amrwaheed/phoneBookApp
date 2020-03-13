import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneService } from 'src/app/_services/phone.service';
import { Phone } from 'src/app/_models/phone';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {
  EditForm:FormGroup;

  phones:Phone = new Phone();

  isValid: boolean = false;
  errroMessage:string='';
  get name() {
    return this.EditForm.get('name');
  }

  get phoneNumber() {
    return this.EditForm.get('phoneNumber');
  }
  constructor(
    private activeRoute:ActivatedRoute ,
     private phoneServiec:PhoneService,
     private router: Router,

    
  ) { }

  ngOnInit() {

    this.EditForm =  new FormGroup({
      '_id': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required,, Validators.minLength(3)]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.minLength(11), CustomValidators.number]),
    })


    this.activeRoute.params.subscribe(paramsObject =>{
      this.phoneServiec.Edit_Phone_Number_By_Id(paramsObject.id).subscribe(userPhoneData =>{
        this.phones = userPhoneData
        this.EditForm.get('_id').setValue(this.phones._id)
        this.EditForm.get('name').setValue(this.phones.name)
        this.EditForm.get('phoneNumber').setValue(this.phones.phoneNumber)

      })
    })    
  }

  onSubmit(){
   
    this.phoneServiec.update_Phone_Number_By_Id(this.EditForm.value).subscribe(result =>{
     this.router.navigate(['/'])
    },
    err =>{
 
      if(err.error.error.statusCode == 500){

        this.errroMessage = "Phone Number Exists"
      }else{
        this.errroMessage = "Name Should NOT Be Shorter Than 3 Characters"
      }
    })
  }


  ngDoCheck(): void {

    if (this.EditForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }

}
