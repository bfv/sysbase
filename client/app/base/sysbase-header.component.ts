
import { Component, OnInit } from '@angular/core';

@Component({
    //moduleId: __moduleName,
    selector: 'sysbase-header',
    templateUrl: 'app/base/sysbase-header.component.html'
})

export class SysbaseHeaderComponent implements OnInit {
    
    constructor() { 
        console.log("sysbase header constructor");
    }
    
    ngOnInit() { }

}