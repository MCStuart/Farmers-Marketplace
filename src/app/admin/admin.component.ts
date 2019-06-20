import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../farmer/farmer.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FarmerService]
})

export class AdminComponent implements OnInit {

  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
  }

  submitForm(farmerName: string, produce: string, description: string) {
    var newFarmer: Farmer = new Farmer(farmerName, produce, description);
    this.farmerService.addFarmer(newFarmer);
  }

}
