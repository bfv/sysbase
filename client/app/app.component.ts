
import { Component } from "@angular/core";
import { SysbaseHeaderComponent } from "./base/sysbase-header.component";
import { SysbaseMenubarComponent } from "./base/sysbase-menubar.component";

@Component({
    selector: "sysbase-app",
    templateUrl: "app/app.component.html",
    directives: [SysbaseHeaderComponent, SysbaseMenubarComponent]
})

export class AppComponent {
    
}