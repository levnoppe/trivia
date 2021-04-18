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
  number = 0;
  questions: any = (data as any).default;
  answered = false;
  rightAnswer = false;
  answeredButton = null;

  ngOnInit(){
    console.log(data);
    this.answered = false;
    this.answeredButton = null;
  }

  onAnswer(answer: number){
    if (answer === this.questions[this.number].rightAnswer){
      this.rightAnswer = true;
    }
    else {
      this.rightAnswer = false;
    }
    this.answeredButton = answer;
  }

  getColor(answer: number): object {
    if (this.answeredButton){
      if (answer === this.answeredButton){
        if (answer === this.questions[this.number].rightAnswer){
          return {'background-color': 'green'};
        } else {
          return {'background-color': 'red'};
        }
      } else {
        if (answer === this.questions[this.number].rightAnswer){
          return {'background-color': 'darkSlateGray'};
        } else {
          return {'background-color': 'grey'};
        }
      }
    }
  }
}
