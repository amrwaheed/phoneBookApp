import { Component, OnInit, ViewChild } from '@angular/core';
import { PhoneService } from 'src/app/_services/phone.service';
import { Phone } from 'src/app/_models/phone';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  isDtInitialized: boolean = false
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  private phones : Phone[] =[];
  constructor(
    private phoneServiec:PhoneService,
   
  ) { }

  ngOnInit() {
     // datatable options
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true
    };
/**
 * Get All User With Phone Numbers
 */
    this.phoneServiec.get_all_phone_numbers().subscribe(ResultData => {
      this.phones = ResultData
      this.dtTrigger.next();
    })
  }
/**
 * Delete phone Number by Id And Remmove it from UI
 * @param phoneId 
 * @param index 
 */
  deletePhone(phoneId,index){
    this.phoneServiec.delete_Phone_Number_By_Id(phoneId).subscribe(deletedrecord=>{
      this.phones.splice(index,1)
    })
  }

  // table rerender to retrieve another booking data
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first      
      dtInstance.destroy();
      // Call the dtTrigger to rerender again       
      this.dtTrigger.next();
    });
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
