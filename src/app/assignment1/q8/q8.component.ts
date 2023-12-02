import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['./q8.component.css']
})
export class Q8Component {

  q = {
    question: "What is a component in angular?",
    answer: "Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.\nThe Angular component allows us to provide a way for styling the component. This means that we can provide different CSS styling, rules, and other device-specific style configuration for a specific component. For that, the Angular component has metadata properties based on your different needs and requirements.",
    imageUrl:"",
    showAnswer: false,
  }

  name = "Show Answer"

  // In your component.ts file
  toggleAnswerVisibility(q: QaItem) {
    q.showAnswer = !q.showAnswer;
    if(this.name == "Show Answer")
    {
      this.name = "Hide Answer";
    }
    else
    {
      this.name = "Show Answer"
    }
  }

}
