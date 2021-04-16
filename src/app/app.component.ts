import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trivia';

  ngOnInit(){
    console.log(data);
  }
}
