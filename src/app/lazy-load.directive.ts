import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'loaded');
          this.observer?.disconnect();
        }
      }, {
        root: null,
        threshold: 0.1
      });

      this.observer.observe(this.el.nativeElement);

      // เช็คอีกครั้งหลังจากเลื่อนหน้าเพื่อรองรับการโหลดครั้งแรก
      setTimeout(() => {
        this.checkIfInView();
      }, 100);
    });
  }

  private checkIfInView() {
    if (this.observer) {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      const inView = (
        rect.top <= windowHeight * 0.9 &&
        rect.left <= windowWidth &&
        rect.bottom >= 0 &&
        rect.right >= 0
      );

      if (inView) {
        this.renderer.addClass(this.el.nativeElement, 'loaded');
        this.observer.disconnect();
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
