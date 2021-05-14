import { Directive, ElementRef, AfterViewInit } from '@angular/core';  
  
@Directive({   
     selector: '[ociuiBuild]'   
})  
export class OciuiBuildDirective implements AfterViewInit{  
    constructor(private elRef: ElementRef) {   
    }  
    ngAfterViewInit(): void {  
    console.log("under directive...", this.elRef.nativeElement.id);
    debugger;
    }  
}  