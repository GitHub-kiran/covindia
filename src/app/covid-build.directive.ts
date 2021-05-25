import { Directive, ElementRef, AfterViewInit } from '@angular/core';  
  
@Directive({   
     selector: '[covidBuild]'   
})  
export class CovidBuildDirective implements AfterViewInit{  
    constructor(private elRef: ElementRef) {   
    }  
    ngAfterViewInit(): void {  
    console.log("under directive...", this.elRef.nativeElement.id);
    }  
}  