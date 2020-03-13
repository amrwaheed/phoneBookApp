import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/_services/phone.service';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {
  AddForm: FormGroup;
  isValid: boolean = false;
  errroMessage: string = '';
  get name() {
    return this.AddForm.get('name');
  }

  get phoneNumber() {
    return this.AddForm.get('phoneNumber');
  }

  constructor(
    private router: Router,
    private phoneServiec: PhoneService,

  ) { }

  ngOnInit() {


    this.AddForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(11), CustomValidators.number]),
    })

  }

  onSubmit() {
    this.phoneServiec.add_New_Phone_Number(this.AddForm.value).subscribe(() => {

      this.router.navigate(['/'])
    },
      err => {

        if (err.error.error.statusCode == 500) {
      
          this.errroMessage = "Phone Number Exists"
        } else {
        
          this.errroMessage = "Name Should NOT Be Shorter Than 3 Characters"
        }
      })
  }

  ngDoCheck(): void {

    if (this.AddForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }

}
