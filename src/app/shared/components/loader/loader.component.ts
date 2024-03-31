import { Component } from '@angular/core';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  isLoading : boolean = false
  constructor(private SharedService: SharedService) {
    // You can use a service to control the loader state
    this.SharedService.loadingStatus.subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }
}
