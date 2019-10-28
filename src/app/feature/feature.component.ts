import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})

export class FeatureComponent implements OnInit { 

  title: string;
  testjson: object;
  testjsonstring: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }  

  ngOnInit() {

    //read queryParam
    this.route.queryParamMap.subscribe(queryParams => {
      this.title = queryParams.get("title")
    })

    //send REST call
    this.http.get('https://api.github.com/users/robertdiers').subscribe(data => {
      this.testjson = data;
      this.testjsonstring = JSON.stringify(this.testjson);
    });

  }

}
