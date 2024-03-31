import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Service/users.service';
import { User } from 'src/app/shared/interfaces/User.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  page: number = 1;
  users : User[] = []
  filterdUsers : User[] = []
  constructor(private UsersService : UsersService){}
  ngOnInit(): void {
    this.UsersService.filterValue$.subscribe((filterValue) => {
      this.applyFilter(filterValue);
    });

    this.getAllUsers(this.page)
  }
  getAllUsers(page: number) {
    this.UsersService.getAllUsers(page).subscribe({
      next: (res) => {
        this.users = res.data;
        this.filterdUsers = this.users
      },
      error: (err) => {
        this.UsersService.openSnackBar('Failed to Get Data');
      },
    });
  }
  handlePageination(page: number) {
    this.page = page
    this.getAllUsers(this.page);
  }
  applyFilter(filterCriteria: string) {
    // Convert filterCriteria to lowercase for case-insensitive matching
    const filter = filterCriteria.toLowerCase();

    this.filterdUsers = this.users.filter(user =>
      user.id.toString().includes(filter) ||
      user.email.toLowerCase().includes(filter) ||
      user.first_name.toLowerCase().includes(filter) ||
      user.last_name.toLowerCase().includes(filter)
    );
  }


}
