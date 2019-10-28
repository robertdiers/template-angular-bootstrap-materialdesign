import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {  

  constructor(private router: Router) {
    this.onStartup();
  }

  onStartup(){
    //place you startup code here - remember TypeScript is more powerful and explicit than JavaScript
    //you might want to use 'implements OnInit' and 'ngOnInit()' instead
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }    
  }

  goFeatures() {
    //you might want to add more queryParams here
    this.router.navigate(['/features'], { queryParams: { title: 'FeatureS' } });
  }

}
