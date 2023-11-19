import { Component } from '@angular/core';

export interface ProductsMenu {
  img:string;
  user:string;
  score:number;
  date:Date;
  summary:string;
  review:string;
  workflow:string;
  assignees:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor() { }
  
  // ? Scroll Method
  onScroll() {
    console.log('scrolled');
  }

  // * Products
  products:ProductsMenu[]  = [
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick123',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_kart',
      user:'Luis123',
      score:3.5,
      date:new Date(2023,5,2,15,0,0),
      summary:'Mario Kart Deluxe',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_party',
      user:'Georgie123',
      score:2,
      date:new Date(2023,10,2,10,50,0),
      summary:'Mario Party Superstars',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'smash_bros',
      user:'Alan123',
      score:5,
      date:new Date(2023,3,12),
      summary:'Super Smash bros Ultimate',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_delux',
      user:'Juan123',
      score:3,
      date:new Date(2023,7,12,18,10,20),
      summary:'Super Mario Bros Delux',
      review:'',
      workflow:'',
      assignees:''
    },
  ]


}
