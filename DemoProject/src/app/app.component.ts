import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    //template: ` Name <input [(ngModel)]='name' /> You entrerd : {{name}} `
    //template: '<list-employee></list-employee>'
    //template: `Youe text : <input type='text' [(ngModel)]='name' />
    //            <br />
    //            <br />
    //            <br />
    //            <simple [simpleInput]='name'></simple>
    //  
    template: `
                    <div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees">Employees</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees1">Other</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
              `          
})
export class AppComponent  {
    name : string = 'Shailesh Singh ';
}
