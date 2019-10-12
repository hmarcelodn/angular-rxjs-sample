import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subject, interval, of, fromEvent } from 'rxjs';
import { scan, takeUntil, tap, withLatestFrom, map, takeWhile } from 'rxjs/operators';
import * as converter from 'number-to-words';

@Component({
  selector: 'app-sample01',
  templateUrl: './sample01.component.html',
  styleUrls: ['./sample01.component.scss']
})
export class Sample01Component implements OnInit, OnDestroy {

  interval$: Observable<number>;
  isNormal$ = new Subject<boolean>();
  isNormalStanding$ = new Subject<boolean>();
  isSsj$ = new Subject<boolean>();
  isSsjStanding$ = new Subject<boolean>();
  words$ = new Subject();
  progress$ = new BehaviorSubject<number>(0);
  componentDestroyed$ = new Subject();
  increasing$ = new Subject();

  constructor() { }

  ngOnInit() {

    const begin = fromEvent(document, 'keydown');
    const end = fromEvent(document, 'keyup');

    this.progress$.next(0);
    this.words$.next('');
    this.increasing$.next(false);

    begin.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      this.increasing$.next(true);
      if (this.progress$.getValue()  <= 98) {
        this.progress$.next(this.progress$.getValue() + 2);
      }
    });

    end.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      this.increasing$.next(false);
      this.interval$ = interval(100);
      this.interval$.pipe(takeUntil(begin)).subscribe(() => {
        if (this.progress$.getValue() >= 2) {
          this.progress$.next(this.progress$.getValue() - 2);
        }
      });
    });

    this.progress$.pipe(takeUntil(this.componentDestroyed$)).subscribe(
      (progress: number) => {
        console.log({ level: progress });
        this.words$.next(converter.toWords(progress));
        if (progress >= 1 && progress < 20) {
          this.isNormalStanding$.next(true);
          this.isNormal$.next(false);
          this.isSsj$ .next(false);
          this.isSsjStanding$.next(false);
        } else if (progress > 20 && progress < 60) {
          this.isNormalStanding$.next(false);
          this.isNormal$.next(true);
          this.isSsj$ .next(false);
          this.isSsjStanding$.next(false);
        } else if (progress > 60 && progress < 90) {
          this.isNormalStanding$.next(false);
          this.isNormal$.next(false);
          this.isSsj$ .next(true);
          this.isSsjStanding$.next(false);
        } else if(progress > 90) {
          this.isNormalStanding$.next(false);
          this.isNormal$.next(false);
          this.isSsj$ .next(false);
          this.isSsjStanding$.next(true);
        }
      },
      (error: any) => console.log('Handling Error'),
      () => console.log('Stream completed')
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

}
