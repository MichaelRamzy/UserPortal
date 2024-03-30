import { Component } from '@angular/core';
import { UsersService } from 'src/app/pages/Service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private UsersService : UsersService){}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.UsersService.setFilterValue(filterValue);
  }
}
