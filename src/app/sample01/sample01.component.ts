import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import * as converter from 'number-to-words';

@Component({
  selector: 'app-sample01',
  templateUrl: './sample01.component.html',
  styleUrls: ['./sample01.component.scss']
})
export class Sample01Component implements OnInit, OnDestroy {

  progress$: Observable<number>;
  words$ = new BehaviorSubject('');
  componentDestroyed$ = new Subject();

  constructor() { }

  ngOnInit() {
    this.progress$ = new Observable((observer: any) => {
      let times = 0;

      setInterval(() => {
        if (times > 100) {
          observer.complete();
        }

        observer.next(times++);
      }, 100);
    });

    this.progress$.subscribe(
      (progress: number) => this.words$.next(converter.toWords(progress)),
      (error: any) => console.log('Handling Error'),
      () => console.log('Stream completed')
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

}
