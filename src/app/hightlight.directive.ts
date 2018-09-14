import { Directive,ElementRef,Input,OnInit,HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  @Input("appHightlight") highLightColor:boolean;
  constructor(private elem:ElementRef){
  }
  @HostListener('change') ngOnChanges(){
    if(this.highLightColor){
       this.elem.nativeElement.style.backgroundColor='moccasin'
       this.elem.nativeElement.style.color='black';
    }
    else{
      this.elem.nativeElement.style.backgroundColor='purple';
      this.elem.nativeElement.style.color='white';
    }
  }
  ngOnInit(){
  }
}
