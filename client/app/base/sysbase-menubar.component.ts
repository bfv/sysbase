
import { Component, OnInit } from '@angular/core';
import { SysbaseButtonComponent, SysbaseButtonEvent } from './../ui/sysbase-button.component';

@Component({
    //moduleId: __moduleName,
    selector: 'sysbase-menubar',
    templateUrl: 'app/base/sysbase-menubar.component.html',
    directives: [SysbaseButtonComponent]
})

export class SysbaseMenubarComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
    
    buttonText: string = "hatsekidee";
    
    public onClick2(event: SysbaseButtonEvent) {
        console.log("onclick2:" );
        if (event) {
            
            console.log('  event parameter defined');
            if (event.id) {
                console.log("  id=" + event.id);
            }
            if (event.name) {
                console.log("  name=" + event.name);
            }
        }
    }
}