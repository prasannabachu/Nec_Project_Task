import { ViewChild, Component, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { APIData, UserApiData, UserDetails } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserService) {

  }

  displayedColumns: string[] = [
    "FirstName",
    "LastName",
    "DOB",
    "Gender",
    "Status"
  ];

  usersLits: any;
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    this.userDetailsFetch()
  }

  // Fetching the Userslist from the API.
  userDetailsFetch() {
    this.usersLits = [];
    this.userService.getUsers().subscribe((users: UserApiData) => {
      users.records.forEach((element: APIData) => {
        const user = {
          FirstName: element.fields["First Name"],
          LastName: element.fields["Last Name"],
          DOB: element.fields["Date of Birth"],
          Status: element.fields["Status"],
          Gender: element.fields["Gender"],
        }
        this.usersLits.push(user)
      });

      this.dataSource = new MatTableDataSource<UserDetails>(this.usersLits);
      this.dataSource.paginator = this.paginator;
    })
  }
}