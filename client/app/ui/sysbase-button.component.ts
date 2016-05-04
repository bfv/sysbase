
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    //moduleId: __moduleName,
    selector: 'sb-button',
    templateUrl: 'app/ui/sysbase-button.component.html'
})

export class SysbaseButtonComponent implements OnInit {
    
    @Input() type;
    @Input() name;
    @Input() btnId;
    
    @Output() clicked = new EventEmitter();
    

    constructor() {
        
     }

    ngOnInit() { 
        console.log("type:" + this.type);
        console.log("id: " + this.btnId);
        
        if (this.type) {
            this.text = this.type + " button";
        } 
        
    }
    
    public onClick(event: MouseEvent) {
        console.log(this.text + " button clicked");  
        
        let eventOut: SysbaseButtonEventParams = { 
            id: this.btnId,
            name: this.name,
            mouseEvent: event
         };
         
        this.clicked.emit(eventOut);  
        
    }
    
    public text: string = "button text";
}

export interface SysbaseButtonEventParams {
    id: string,
    name: string,
    mouseEvent: MouseEvent
}