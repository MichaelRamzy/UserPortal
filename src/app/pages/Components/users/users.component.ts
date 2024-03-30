import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { UsersService } from '../../Service/users.service';
import { User } from 'src/app/shared/interfaces/User.interface';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'avatar', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  page: number = 1;
  hidePageSize: boolean = true;
  UsersLength: number = 0;
  pageSize: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private UsersService: UsersService) {}

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.UsersService.filterValue$.subscribe((filterValue) => {
      this.applyFilter(filterValue);
    });

    this.getAllUsers(this.page);
  }
  getAllUsers(page: number) {
    this.UsersService.getAllUsers(page).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.UsersLength = res.total;
        this.pageSize = res.data.length;
      },
      error: (err) => {
        this.UsersService.openSnackBar('Failed to Get Data');
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    e.pageIndex++;
    this.getAllUsers(e.pageIndex);
  }

  applyFilter(filterValue: string) {
    if (this.dataSource) {
      this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  clickedRows(row: User) {
    console.log(row);
  }
}
