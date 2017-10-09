import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appInsideWindowBounds]'
})
export class InsideWindowBoundsDirective implements OnInit {
  @Input() bottomOffset = 0;
  private appliedMargin = 0;
  private oldMarginTop = 0;

  constructor(private el: ElementRef) {
    this.oldMarginTop = Number(el.nativeElement.style.marginTop.replace('px', ''));
    document.onscroll = () => {
      this.adjustPopup();
    };
  }

  ngOnInit() {
    this.adjustPopup();
  }

  adjustPopup() {
    const elWindowTop = this.el.nativeElement.getBoundingClientRect().top - this.appliedMargin;
    const elOuterHeight = Number(window.getComputedStyle(this.el.nativeElement).height.replace('px', ''));
    this.el.nativeElement.style.marginTop = null;
    if (elWindowTop + elOuterHeight + this.bottomOffset > window.innerHeight) {
      this.appliedMargin = this.oldMarginTop + window.innerHeight - (elWindowTop + elOuterHeight + this.bottomOffset);
      this.el.nativeElement.style.marginTop = this.appliedMargin + 'px';
    }
  }

}
