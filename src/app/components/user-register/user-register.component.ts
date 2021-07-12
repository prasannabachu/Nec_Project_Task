import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { APIData, UserReqBody } from "src/app/models/user.model";
import { UserService } from "../../services/user.service";


@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"]
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  checked = false;
  disabled = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        gender: [""],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],        
        dob: [""],
        status: [false, Validators.requiredTrue]
      }
    );
  }



  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const reqBody:UserReqBody = {
      fields: {
        "First Name": this.registerForm.controls.firstName.value,
        "Last Name": this.registerForm.controls.lastName.value,
        "Date of Birth": this.registerForm.controls.dob.value,
        "Status": 'Active',
        "Gender": this.registerForm.controls.gender.value
      }
    }
    this.userService.registerUser(reqBody).subscribe((data:APIData) => {
      alert(data.fields["First Name"]+" "+ "user is successfully created")
      this.router.navigateByUrl('/user-details')
    })
  }

  // On cancle redirecting to details page
  onCancle() {
    this.submitted = false;
    this.router.navigateByUrl('/user-details')
  }
}
