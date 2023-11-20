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
  // * Loading control
  isLoading = false;

  onScrollDown() {
    if (this.isLoading) {
      return;
    }

    // * Container height
    const visibleHeight = document.documentElement.clientHeight;

    // * Total height container 
    const totalHeight = document.documentElement.scrollHeight;

    // * Position
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    // * Reference position to load more elements
    const referencePosition = 0.0* totalHeight;

    if (scrollPosition > referencePosition) {
      console.log('Load more components!');
      
      // * Activate load
      this.isLoading = true;

      const length = this.products.length;

      setTimeout(() => {
        const p: any = ' '.repeat(1).split('').map((s, i) => i + 1 + length);
        if (p.length > 0) {
          // * Load only one element
          this.products.push({
            img: 'mario_wonder',
            user: `User${this.products.length + 1}`,
            score: Math.floor(Math.random() * 5) + 1,
            date: new Date(),
            summary: 'Placeholder Summary',
            review: '',
            workflow: '',
            assignees: ''
          });
        }
        this.isLoading = false;
      }, 500);
    }
  }



  // * Products
  products:ProductsMenu[]  = [
    {
      img:'mario_wonder',
      user:'Erick1',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick2',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick3',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick4',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
    {
      img:'mario_wonder',
      user:'Erick5',
      score:4.5,
      date:new Date(2023,3,12,11,10,0),
      summary:'Super Mario Bros Wonder',
      review:'',
      workflow:'',
      assignees:''
    },
  ]


}
