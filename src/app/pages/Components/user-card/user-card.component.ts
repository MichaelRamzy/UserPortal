import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UsersService } from '../../Service/users.service';
import { User } from 'src/app/shared/interfaces/User.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit{
  @Input() userData: User | null = null  ;
  userId !: number 
  // userData !: User 
  isItSingleUserComponent : boolean = false
  constructor(private activatedRoute : ActivatedRoute,private usersService : UsersService ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      
      });
      if(this.userId){
        this.isItSingleUserComponent = true
        this.getUserById(this.userId)
      }
  }

  getUserById(id : number){
    this.usersService.getUserById(id).subscribe({
      next : (res) => {
        this.userData = res.data
        console.log(res);
      },
      error : (err) => {
        this.usersService.openSnackBar('Failed to Get Data ')
      }
    })

  }
}
