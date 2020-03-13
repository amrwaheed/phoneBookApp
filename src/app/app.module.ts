import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { CustomFormsModule } from 'ng2-validation'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ErrorComponent } from './shared/error/error.component';
import { PhoneListComponent } from './features/phone-list/phone-list.component';
import { PhoneEditComponent } from './features/phone-edit/phone-edit.component';
import { PhoneAddComponent } from './features/phone-add/phone-add.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    PhoneListComponent,
    PhoneEditComponent,
    PhoneAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CustomFormsModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
