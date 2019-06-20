import { Injectable } from '@angular/core';
import { Farmer } from './farmer/farmer.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FarmerService {
  farmers: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.farmers = database.list('farmers');
   }

  getFarmers() {
    return this.farmers;
  }

  addFarmer(newFarmer: Farmer) {
    this.farmers.push(newFarmer);
  }

  getFarmerById(farmerId: number){
    // for (var i = 0; i <= FARMERS.length - 1; i++) {
    //   if (FARMERS[i].id === farmerId) {
    //     return FARMERS[i];
    //   }
    // }
  }
}
