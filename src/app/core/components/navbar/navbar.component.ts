import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  isHandset$: Observable<boolean> = this.breakpointObservable.observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay());

  isHandsetW$: Observable<boolean> = this.breakpointObservable.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map((result) => result.matches),
      shareReplay());

  constructor(
    private breakpointObservable: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

}
