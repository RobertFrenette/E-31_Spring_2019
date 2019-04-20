import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mountains';
  
  newMountain: string = '';
  mountainName: string = '';
  mountainElevation: string = '';
  mountainDescription: string = '';
  currentYear: number = 2019;

  addNewMountains: boolean = false;

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when Add Mountain is clicked
  onAddMountain(): void {
    this.newMountain = `${this.mountainName} - ${this.mountainElevation}': ${this.mountainDescription}`;
    this.addNewMountains = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.mountainName = '';
    this.mountainElevation = '';
    this.mountainDescription = '';
    this.addNewMountains = false;
  }
}
