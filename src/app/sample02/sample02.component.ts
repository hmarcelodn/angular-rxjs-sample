import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as chalk from 'chalk';

@Component({
  selector: 'app-sample02',
  templateUrl: './sample02.component.html',
  styleUrls: ['./sample02.component.scss']
})
export class Sample02Component implements OnInit, OnDestroy {

  componentDestroyed$ = new Subject();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  //
  // Observables
  //
  onSample01(): void {
    // Observer
    const sampleObservable = new Observable(sampleObserver => {
      sampleObserver.next(1);
      sampleObserver.next(2);
      sampleObserver.next(3);

      setTimeout(() => {
        sampleObserver.next(4);
        sampleObserver.complete();
      }, 3000);
    });

    console.log('Before Subscribe...');

    // Subcriber
    sampleObservable.pipe(takeUntil(this.componentDestroyed$)).subscribe(
      (data) => console.log('New Stream: ', data),
      (error) => console.log('Error'),
      () => console.log('Completed')
    );

    console.log('After Subscribe...');
  }

  //
  // Subjects / Multicast
  //
  onSample02(): void {
    const sampleSubject = new Subject();

    sampleSubject.pipe(takeUntil(this.componentDestroyed$)).subscribe({
      next: (data) => console.log('Observer A: ', data)
    });

    sampleSubject.pipe(takeUntil(this.componentDestroyed$)).subscribe({
      next: (data) => console.log('Observer B: ', data)
    });

    sampleSubject.next(1);
    sampleSubject.next(2);
  }

  //
  // Behavior Subject & Current Value Streamming
  //
  onSample03(): void {
    const sampleSubject = new BehaviorSubject(0);

    sampleSubject.pipe(takeUntil(this.componentDestroyed$)).subscribe(
      (data) => console.log('ObservableA: ', data)
    );

    sampleSubject.next(1);
    sampleSubject.next(2);

    sampleSubject.pipe(takeUntil(this.componentDestroyed$)).subscribe(
      (data) => console.log('ObservableB: ', data)
    );

    sampleSubject.next(3);
  }

  //
  // Replay Subject
  //
  onSample04(): void {
    const sampleReplay = new ReplaySubject();

    sampleReplay.pipe(takeUntil(this.componentDestroyed$)).subscribe(data => {
      console.log('ObserverA:', data);
    });

    sampleReplay.next(1);
    sampleReplay.next(2);
    sampleReplay.next(3);

    sampleReplay.pipe(takeUntil(this.componentDestroyed$)).subscribe(data => {
      console.log('ObserverB:', data);
    });

    sampleReplay.next(4);
  }

}
