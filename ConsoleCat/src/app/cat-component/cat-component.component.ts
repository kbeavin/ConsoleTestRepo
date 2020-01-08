import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../cat-service.service';

@Component({
  selector: 'app-cat-component',
  templateUrl: './cat-component.component.html',
  styleUrls: ['./cat-component.component.sass']
})
export class CatComponentComponent implements OnInit {

  public cats$: Cat[];

  constructor(private catservice: CatService) { }

  ngOnInit() {
    this.catservice.getCat("Lilly")
      .subscribe(cat => cat);

    this.catservice.getAllCats().subscribe((cats: Cat[]) => {

      //do stuff here
      console.log("hey")

      this.cats$ = cats;

    });

  }

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
}
