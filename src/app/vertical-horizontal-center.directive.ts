import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVerticalHorizontalCenter]',
})
export class VerticalHorizontalCenterDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textAlign = 'center';
    this.el.nativeElement.style.verticalAlign = 'middle';
  }
}
