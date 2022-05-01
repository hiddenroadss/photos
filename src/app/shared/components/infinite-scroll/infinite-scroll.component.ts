import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  template: `<ng-content></ng-content><div #anchor class="baseline"></div>`,
  styles: ['.baseline { height: 100px}']
})
export class InfiniteScrollComponent implements OnInit {

  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor') anchor!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(private host: ElementRef) { }

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...this.options
    };

   this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

  }

  ngAfterViewInit() {
    this.observer.observe(this.anchor.nativeElement);

  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  get element() {
    return this.host.nativeElement;
  }
}
