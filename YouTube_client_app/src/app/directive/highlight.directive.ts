import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[myEvent]'
})
export class myEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @Input("myEvent") set changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }


}
