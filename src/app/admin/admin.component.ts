import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmer/farmer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(farmerName: string, produce: string, description: string, id: number) {
    var newFarmer: Farmer = new Farmer(farmerName, produce, description, id);
    console.log(newFarmer);
  }

}
