import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [],
  templateUrl: './comingsoon.component.html',
  styleUrl: './comingsoon.component.scss'
})
export class ComingsoonComponent {
  constructor() { }
  private _diff!: number;
  _days!: number;
  _hours!: number;
  _minutes!: number;
  _seconds!: number;
  private _trialEndsAt!: string;

  ngOnInit(): void {
    // Get today's date
    const today = new Date();

    today.setDate(today.getDate() + 1);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');

    this._trialEndsAt = `${year}-${month}-${day}`;

    interval(1000).pipe(
      map((x) => {
        this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }
}
