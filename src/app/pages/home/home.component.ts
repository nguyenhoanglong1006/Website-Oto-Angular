import { Component, NgModule, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OrderDetailsService){}
  carData:any;
  ngOnInit(): void{
    this.carData = this.service.carDetails
  }
}
