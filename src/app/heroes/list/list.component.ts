import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['ironman', 'thor', 'spiderman', 'black widow', 'hulk'];
  public deleteHeroe?: string;

  removeLastHeroe(): void {
    this.deleteHeroe = this.heroeNames.pop();
  }


}
