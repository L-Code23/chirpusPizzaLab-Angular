import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = "Welcome To Chirpus Pizza";

  Menu:MenuItem[] = [

   {
        name: "Pepperoni Pizza",
        category: "Hot food",
        price: 5.50,
        vegetarian: false,
        soldOut: false

   },
   {
    name: "Cheese Pizza",
    category: "Hot food",
    price: 5.00,
    vegetarian: true,
    soldOut: false

},
{
  name: "Buffalo Wings",
  category: "Hot food",
  price: 10.00,
  vegetarian: false,
  soldOut: false

},
{
  name: "Garlic Knots",
  category: "Hot food",
  price: 7.00,
  vegetarian: true,
  soldOut: true

},
{
  name: "Hoagie",
  category: "Cold food",
  price: 8.00,
  vegetarian: false,
  soldOut: false

},
{
  name: "Garden Salad",
  category: "Cold food",
  price: 8.00,
  vegetarian: true,
  soldOut: false

},
{
  name: "Soda",
  category: "Drinks",
  price: 3.00,
  vegetarian: true,
  soldOut: false

},
  ]

  
}
