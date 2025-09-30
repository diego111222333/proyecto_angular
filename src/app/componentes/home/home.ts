import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scroller.scrollToAnchor(fragment);
        }, 0);
      }
    });
  }}
