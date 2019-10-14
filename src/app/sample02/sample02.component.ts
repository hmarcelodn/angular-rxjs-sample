import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample02',
  templateUrl: './sample02.component.html',
  styleUrls: ['./sample02.component.scss']
})
export class Sample02Component implements OnInit {

  constructor() { }

  sample02$: Observable<number>;

  ngOnInit() {
    this.sample02$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
    });

    this.sample02$.subscribe((data) => console.log('Observer: ', data));
  }

}
