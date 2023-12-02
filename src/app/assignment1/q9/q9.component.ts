import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['./q9.component.css']
})
export class Q9Component {

  q = {
    question: "Explain with syntax the following directives:\n  a.  ngFor\n  b.  ngIf",
    answer: '**ngFor :**\nThe syntax is:\n ***ngFor="let <value> of <collection>"** \n<value> is a variable name of your choosing, <collection> is a property on your component which holds a collection, usually an array but anything that can be iterated over in a for-of loop.It is used to repeat a node for each item in a list.\n **ngIf :** \n The syntax is: \n **<div *ngIf="condition">Content to render when condition is true.</div>** \n The ngIf Directive in Angular10 is used to remove or recreate a portion of HTML element based on an expression. If the expression inside it is false then the element is removed and if it is true then the element is added to the DOM.It conditionally creates or destroys subview from the template.',
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
