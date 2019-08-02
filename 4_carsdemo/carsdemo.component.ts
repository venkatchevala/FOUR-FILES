import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsdemo',
  templateUrl: './carsdemo.component.html',
  styleUrls: ['./carsdemo.component.css']
})
export class CarsdemoComponent {
  public cars = [
  {Name: 'Audi', Photo: 'assets/car1.jpg', Likes: 0, Dislikes: 0},
  {Name: 'BMW', Photo: 'assets/car2.jpg', Likes: 0, Dislikes: 0}
  ];
  public LikesCounter(car) {
    car.Likes++;
  }
  public DislikesCounter(car) {
    car.Dislikes++;
  }
  }
  