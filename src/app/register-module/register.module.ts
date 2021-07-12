import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRegisterComponent } from '../components/user-register/user-register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { StatusPipe } from '../components/pipes/status.pipe';



@NgModule({
  declarations: [UserRegisterComponent,StatusPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    FormsModule,
  ]
})
export class RegisterModule { }
